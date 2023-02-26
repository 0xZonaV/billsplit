import {AnyAction} from "redux";
import {WaiterData} from "@/utils/firebase/firebase.types";
import {
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess,
    signUpFailed,
    signUpSuccess
} from "@/store/waiter/waiter-action";

export type WaiterState = {
    readonly currentWaiter: WaiterData | null,
    readonly error: Error | null,
    readonly isLoading: boolean,
}

const WAITER_INITIAL_STATE: WaiterState = {
    currentWaiter: null,
    error: null,
    isLoading: false,
};

export const waiterReducer = (
    state = WAITER_INITIAL_STATE,
    action= {} as AnyAction
): WaiterState => {
    if (signOutSuccess.match(action)) {
        return {...state, currentWaiter: null};
    }

    if (signUpSuccess.match(action)) {
        //@ts-ignore
        return {...state, currentWaiter: action.payload, isLoading: false};
    }

    if (signInSuccess.match(action)) {
        return {...state, currentWaiter: action.payload, isLoading: false};
    }

    if (signOutFailed.match(action) || signUpFailed.match(action) || signInFailed.match(action)) {
        return {...state, error: action.payload, isLoading: false};
    }

    return state;

};