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
import {getSnapshotFromUserAuth} from "@/store/user/user-saga";

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

export type itemsInOrder = {
    itemsCount: number;
    id: number;
}

export type UserOrder = {
    items: itemsInOrder[];
}

export type UserData = {
    displayName: string;
    email: string;
    role: string;

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

        const userOrder: UserOrder = {
            items: [
                {
                    itemsCount: 0,
                    id: 1,
                }
            ]
        }

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                role,
                userOrder,
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


export const updateUserOrder = async (
    userAuth: User,
    additionalInformation = {} as AdditionalInformation,
    nameOfRestaurant: string,
    tableNum: string,
    idOfItemToAdd: number,
    amountOfItem: number,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;

    const userOrderRef = doc(db, `/restaurant/${nameOfRestaurant}/table/${tableNum}/users/${userAuth.uid}`);

    const orderSnapshot = await getDoc(userOrderRef);

    if (!orderSnapshot.exists()) return;

    const user = await createUserDocumentFromAuth(userAuth, {}, nameOfRestaurant, tableNum);

    if (user) {

        const userData = user.data();

        const userItems = userData.userOrder.items;

        userItems[idOfItemToAdd-1] = {
            id: idOfItemToAdd,
            itemsCount: (userData.userOrder.items[idOfItemToAdd-1].itemsCount + amountOfItem),
        }


        const userOrder: UserOrder = {
            items: userItems
        }
        
        await updateDoc(userOrderRef, {...userData, userOrder});
    }

    return orderSnapshot as QueryDocumentSnapshot<UserData>;
}