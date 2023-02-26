import {takeLatest, all, call, put} from 'typed-redux-saga/';
import {WAITER_ACTION_TYPES} from "./waiter-types";

import {
    createAuthWaiterWithEmailAndPassword,
    createWaiterDocumentFromAuth,
    getCurrentWaiter, signInAuthWaiterWithEmailAndPassword,
    userSignOut,
} from "@/utils/firebase/firebase.utils";
import {AdditionalWaiterInformation} from "@/utils/firebase/firebase.types";
import {
    CheckWaiterSession, EmailSignInStart,
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess, signUpFailed, SignUpStart, SignUpSuccess, signUpSuccess,
} from "./waiter-action";
import {User} from "firebase/auth";


export function* getSnapshotFromWaiterAuth(
    waiterAuth: User,
    nameOfRestaurant: string,
    additionalDetails?: AdditionalWaiterInformation
) {
    try {
        const waiterSnapshot = yield* call(
            createWaiterDocumentFromAuth,
            waiterAuth,
            nameOfRestaurant,
            additionalDetails,
        );

        if (waiterSnapshot) {
            yield* put(signInSuccess({ uId: waiterSnapshot.id, ...waiterSnapshot.data() }));
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}
export function* isWaiterAuthenticated({payload: restaurantName}: CheckWaiterSession ) {


    try {
        const userAuth = yield* call(getCurrentWaiter);
        if (userAuth) {
            yield* call(getSnapshotFromWaiterAuth, userAuth, restaurantName);
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

export function* signUpWithEmail({payload: {email,  password, restaurantName, additionalInformation}}: SignUpStart) {
    try{
        const userCredential = yield* call(
            createAuthWaiterWithEmailAndPassword,
            email,
            password
        );

        if (userCredential) {
            const {user} = userCredential
            yield* put(signUpSuccess(user, additionalInformation, restaurantName));
        }
    } catch (error) {
        yield* put(signUpFailed(error as Error))
    }
}

export function* signInWithEmail({payload: {email, password, restaurantName}}: EmailSignInStart) {
    try {

        const userCredential = yield* call(
            signInAuthWaiterWithEmailAndPassword,
            email,
            password
        )

        if (userCredential) {
            const {user} = userCredential;
            yield* call(getSnapshotFromWaiterAuth, user, restaurantName);
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInAfterSignUp({payload: {waiter, additionalInformation, restaurantName}}: SignUpSuccess) {
    try {
        yield* call(getSnapshotFromWaiterAuth, waiter, restaurantName, additionalInformation)
    } catch (error) {
        yield* put(signUpFailed(error as Error));
    }
}







export function* onCheckWaiterSession() {
    yield* takeLatest(WAITER_ACTION_TYPES.CHECK_USER_SESSION, isWaiterAuthenticated);
}

export function* onSignOut() {
    yield* takeLatest(WAITER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onEmailSignIn() {
    yield* takeLatest(WAITER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
    yield* takeLatest(WAITER_ACTION_TYPES.SIGN_UP_START, signUpWithEmail);
}

export function* onSignUpSuccess() {
    yield* takeLatest(WAITER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}


export function* waiterSaga() {
    yield* all([call(onCheckWaiterSession), call(onSignOut), call(onSignUpSuccess), call(onSignUpStart), call(onEmailSignIn)]);
}

