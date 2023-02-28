import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    User
} from "@firebase/auth";
import {
    doc,
    getDoc,
    getFirestore,
    setDoc,
    QueryDocumentSnapshot,
    collection,
    getDocs,
    query, updateDoc
} from "@firebase/firestore";
import {MenuItem} from "@/store/menu/menu-types";
import {
    AdditionalInformation,
    AdditionalWaiterInformation,
    UserData,
    UserOrder,
    WaiterData
} from "@/utils/firebase/firebase.types";
import {CartItemType} from "@/store/cart/cart-types";
import {firebaseConfig} from "@/utils/firebase/firebase.consts";
import {sendNewOrderNotification} from "@/utils/telegram/telegram.utils";



const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {} as AdditionalInformation,
    nameOfRestaurant: string,
    tableNum: string,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;

    const userDocRef = doc(db, `/restaurant/${nameOfRestaurant}/table/${tableNum}/users/`, userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const role = "user"

        const restaurantMenu = await getRestaurantMenu(nameOfRestaurant);

        const items: CartItemType[] = restaurantMenu.map(menuItem =>  ({...menuItem, quantity: 0}));

        const userOrder: UserOrder = {
            items: items,
        }

        const orderComments: string[] = [];

        const id = userAuth.uid;

        try {
            await setDoc(userDocRef, {
                displayName,
                id,
                email,
                role,
                userOrder,
                orderComments,
                ...additionalInformation
            });
        } catch (error) {
            console.log('Error with creating user ', error )
        }
    }

    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const userSignOut = async () => await signOut(auth);

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}



export const getRestaurantMenu  = async (restaurant: string): Promise<MenuItem[]> => {
    const collectionRef = collection(db, ('/restaurant/' + restaurant + '/menu') );
    const q = query(collectionRef);


    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
        (docSnapshot) => docSnapshot.data() as MenuItem
    );
}




export const getTableUsers  = async (nameOfRestaurant: string, tableNum: string ): Promise<null | UserData[] > => {
    const collectionRef = collection(db, (`/restaurant/${nameOfRestaurant}/table/${tableNum}/users/`) );
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
        (docSnapshot) => docSnapshot.data() as UserData
    );
}



export const updateUserOrder = async (
    userAuth: User,
    additionalInformation = {} as AdditionalInformation,
    nameOfRestaurant: string,
    tableNum: string,
    itemsToAdd: CartItemType[],
    newComment: string
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;

    const userOrderRef = doc(db, `/restaurant/${nameOfRestaurant}/table/${tableNum}/users/${userAuth.uid}`);

    const orderSnapshot = await getDoc(userOrderRef);

    if (!orderSnapshot.exists()) return;

    const user = await createUserDocumentFromAuth(userAuth, additionalInformation, nameOfRestaurant, tableNum);

    if (user) {

        const userData = user.data();

        const oldItems = userData.userOrder.items;
        const orderComments = userData.orderComments;

        orderComments.push(newComment);

        const items = oldItems.map((element, index) => {
            if (element.id === itemsToAdd[index].id) {
                const newQuan = itemsToAdd[index].quantity + element.quantity;

                return ({...element, quantity: newQuan});
            } else return element
        })



        const userOrder: UserOrder = {
            items: items
        }

        sendNewOrderNotification("470239748", tableNum, userData.displayName);

        await updateDoc(userOrderRef, {...userData, orderComments: orderComments, userOrder});
    }

    return orderSnapshot as QueryDocumentSnapshot<UserData>;
}


export const getWaiterInfo  = async (nameOfRestaurant: string): Promise<WaiterData[]> => {
    const collectionRef = collection(db, (`/restaurant/${nameOfRestaurant}/staff/`) );
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);


    return querySnapshot.docs.map(
        (docSnapshot) => docSnapshot.data() as WaiterData
    );
}




export const createWaiterDocumentFromAuth = async (
    waiterAuth: User,
    nameOfRestaurant: string,
    additionalInformation = {} as  AdditionalWaiterInformation,
): Promise<void | QueryDocumentSnapshot<WaiterData>> => {
    if (!waiterAuth) return;

    const waiterDocRef = doc(db, `/restaurant/${nameOfRestaurant}/staff`, waiterAuth.uid);


    const userSnapshot = await getDoc(waiterDocRef);

    if (!userSnapshot.exists()) {
        const { email } = waiterAuth;
        const role = "waiter";
        const id = waiterAuth.uid;

        try {
            await setDoc(waiterDocRef, {
                email,
                role,
                id,
                ...additionalInformation
            });
        } catch (error) {
            console.log('Error with creating user ', error )
        }
    }

    return userSnapshot as QueryDocumentSnapshot<WaiterData>;
}

export const createAuthWaiterWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWaiterWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const getCurrentWaiter = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}