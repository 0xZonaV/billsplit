import {takeLatest, all, call, put} from 'typed-redux-saga/';
import {USER_ACTION_TYPES} from "./user-types";

import {
    AdditionalInformation,
    createUserDocumentFromAuth,
    getCurrentUser, getTableUsers,
    signInWithGooglePopup, updateUserOrder,
    userSignOut,
} from "@/utils/firebase/firebase.utils";
import {
    addItemFailed,
    AddItemStart,
    CheckUserSession,
    GoogleSignInStart, setTableUsersFailed, SetTableUsersStart, setTableUsersSuccess,
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess,
} from "./user-action";
import {User} from "firebase/auth";

const {
    CHECK_USER_SESSION,
    GOOGLE_SIGN_IN_START,
    SIGN_OUT_START,
    ADD_ITEM_IN_ORDER_START,
    SET_TABLE_USERS_START
} = USER_ACTION_TYPES;



export function* getSnapshotFromUserAuth(userAuth: User, nameOfRestaurant: string, tableNum: string, additionalDetails?: AdditionalInformation ) {
    try {
        const userSnapshot = yield* call(
            createUserDocumentFromAuth,
            userAuth,
            additionalDetails,
            nameOfRestaurant,
            tableNum
        );

        if (userSnapshot) {
            yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInWithGoogle({payload: {nameOfRestaurant, tableNum}}: GoogleSignInStart) {
    try {
        const { user } = yield* call(signInWithGooglePopup);
        yield* call(getSnapshotFromUserAuth, user, nameOfRestaurant, tableNum);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* isUserAuthenticated({payload: {nameOfRestaurant, tableNum}}: CheckUserSession ) {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (userAuth) {
            yield* call(getSnapshotFromUserAuth, userAuth, nameOfRestaurant, tableNum);
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signOut() {
    try{
        yield* call(userSignOut);
        yield* put(signOutSuccess());
    } catch (error) {
        signOutFailed(error as Error);
    }
}

export function* addItemIntoOrder({payload: {itemsCount, id, tableNum, nameOfRestaurant}}: AddItemStart) {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (userAuth) {
            yield* call(updateUserOrder, userAuth, {}, nameOfRestaurant, tableNum, id, itemsCount);

            yield* call(getSnapshotFromUserAuth, userAuth, nameOfRestaurant, tableNum);
        }
    } catch (error) {
        yield put(addItemFailed(error as Error))
    }
}


export function* setTableUsers({payload: {tableNum, nameOfRestaurant}}: SetTableUsersStart) {
    try {
        const users = yield* call(getTableUsers, nameOfRestaurant, tableNum);
        if (users) {
            yield* put(setTableUsersSuccess(users))
        }

    } catch (error) {
        yield* put(setTableUsersFailed(error as Error));
    }
}





export function* onGoogleSignInStart() {
    yield* takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
    yield* takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOut() {
    yield* takeLatest(SIGN_OUT_START, signOut);
}

export function* onItemAdd() {
    yield* takeLatest(ADD_ITEM_IN_ORDER_START, addItemIntoOrder);
}

export function* onUsersFetchStart() {
    yield* takeLatest(SET_TABLE_USERS_START, setTableUsers);
}


export function* userSaga() {
    yield* all([call(onCheckUserSession), call(onSignOut),call(onGoogleSignInStart), call(onItemAdd), call(onUsersFetchStart)]);
}

