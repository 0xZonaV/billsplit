import {MenuItem} from "@/store/menu/menu-types";
import {AnyAction} from "redux";
import {fetchMenuFailed, fetchMenuStart, fetchMenuSuccess} from "@/store/menu/menu-action";

export type MenuReducerState = {
    readonly menu: MenuItem[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const MENU_INITIAL_STATE: MenuReducerState = {
    menu: [],
    isLoading: false,
    error: null
};

export const menuReducer = (
    state = MENU_INITIAL_STATE,
    action= {} as AnyAction
): MenuReducerState => {
    if (fetchMenuStart.match(action)) {
        return {...state, isLoading: true};
    }

    if (fetchMenuSuccess.match(action)) {
        return {...state, menu: action.payload, isLoading: false};
    }

    if (fetchMenuFailed.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }

    return state;
};