import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    NextOrObserver,
    onAuthStateChanged,
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
import firebase from "firebase/compat";
import {MenuItem} from "@/store/menu/menu-types";
import {WaiterData} from "@/utils/firebase/firebase.types";
import {CartItemType} from "@/store/cart/cart-types";

const firebaseConfig = {
    apiKey: "AIzaSyAO155af5IBhclOn437Q0jQZy-7ho69byM",
    authDomain: "bill-split-b57f6.firebaseapp.com",
    projectId: "bill-split-b57f6",
    storageBucket: "bill-split-b57f6.appspot.com",
    messagingSenderId: "237496215594",
    appId: "1:237496215594:web:ad3d64950c50caf4a07b53",
    measurementId: "G-6NNZVCBKRV"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export type AdditionalInformation = {
    displayName?: string;

};


export type UserOrder = {
    items: CartItemType[];
}

export type UserData = {
    displayName: string;

    id: "";
    email: string;
    role: string;
    orderComments: string[];
    userOrder: UserOrder;

}

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

        // TODO: Add id to user and full item into order

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

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

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
