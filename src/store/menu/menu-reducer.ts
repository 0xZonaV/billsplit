import {MenuItem} from "@/store/menu/menu-types";
import {AnyAction} from "redux";
import {
    fetchMenuFailed,
    fetchMenuStart,
    fetchMenuSuccess, fetchWaiterFailed,
    fetchWaiterStart,
    fetchWaiterSuccess
} from "@/store/menu/menu-action";
import {WaiterData} from "@/utils/firebase/firebase.types";

export type MenuReducerState = {
    readonly menu: MenuItem[];
    readonly isMenuLoading: boolean;
    readonly isWaiterLoading: boolean;
    readonly waiters: WaiterData[];
    readonly error: Error | null;
}

export const MENU_INITIAL_STATE: MenuReducerState = {
    menu: [],
    isMenuLoading: false,
    isWaiterLoading: false,
    waiters: [],
    error: null
};

export const menuReducer = (
    state = MENU_INITIAL_STATE,
    action= {} as AnyAction
): MenuReducerState => {
    if (fetchMenuStart.match(action)) {
        return {...state, isMenuLoading: true};
    }

    if (fetchMenuSuccess.match(action)) {
        return {...state, menu: action.payload, isMenuLoading: false};
    }

    if (fetchMenuFailed.match(action)) {
        return {...state, isMenuLoading: false, error: action.payload};
    }

    if (fetchWaiterStart.match(action)) {
        return {...state, isWaiterLoading: true};
    }

    if (fetchWaiterSuccess.match(action)) {
        return {...state, waiters: action.payload, isWaiterLoading: false};
    }

    if (fetchWaiterFailed.match(action)) {
        return {...state, isWaiterLoading: false, error: action.payload};
    }

    return state;
};