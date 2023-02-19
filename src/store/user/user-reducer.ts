import {AnyAction} from "redux";
import {UserData} from "@/utils/firebase/firebase.utils";
import {
    setTableUsersSuccess,
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess
} from "@/store/user/user-action";

export type UserState = {
    readonly currentUser: UserData | null,
    readonly tableUsers: UserData[] | null,
    readonly error: Error | null,
    readonly isLoading: boolean
}

const USER_INITIAL_STATE: UserState = {
    currentUser: null,
    tableUsers: null,
    error: null,
    isLoading: false
};

export const userReducer = (
    state = USER_INITIAL_STATE,
    action= {} as AnyAction
): UserState => {
    if (signOutSuccess.match(action)) {
        return {...state, currentUser: null};
    }

    if (setTableUsersSuccess.match(action)) {
        return {...state, tableUsers: action.payload}
    }

    if (signInSuccess.match(action)) {
        return {...state, currentUser: action.payload, isLoading: false};
    }

    if (signOutFailed.match(action) || signInFailed.match(action)) {
        return {...state, error: action.payload, isLoading: false};
    }

    return state;

};