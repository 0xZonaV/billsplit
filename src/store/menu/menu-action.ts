import {Action, ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {MENU_ACTION_TYPES, MenuItem} from "@/store/menu/menu-types";
import {WaiterData} from "@/utils/firebase/firebase.types";
import {rest} from "@/store/user/user-action";


export type FetchMenuStart = Action<MENU_ACTION_TYPES.FETCH_MENU_START>;

export type FetchMenuSuccess = ActionWithPayload<MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, MenuItem[]>

export type FetchMenuFailed = ActionWithPayload<MENU_ACTION_TYPES.FETCH_MENU_FAILED, Error>


export type FetchWaiterStart = ActionWithPayload<MENU_ACTION_TYPES.FETCH_WAITER_START, rest>;

export type FetchWaiterSuccess = ActionWithPayload<MENU_ACTION_TYPES.FETCH_WAITER_SUCCESS, WaiterData[]>

export type FetchWaiterFailed = ActionWithPayload<MENU_ACTION_TYPES.FETCH_WAITER_FAILED, Error>


export const fetchMenuStart = withMatcher(
    (): FetchMenuStart => createAction(MENU_ACTION_TYPES.FETCH_MENU_START, )
);

export const fetchMenuSuccess = withMatcher(
    (menu: MenuItem[]): FetchMenuSuccess => createAction(MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, menu)
);

export const fetchMenuFailed = withMatcher(
    (error: Error): FetchMenuFailed => createAction(MENU_ACTION_TYPES.FETCH_MENU_FAILED, error)
);

export const fetchWaiterStart = withMatcher(
    ( rest:rest ): FetchWaiterStart => createAction(MENU_ACTION_TYPES.FETCH_WAITER_START, rest)
);

export const fetchWaiterSuccess = withMatcher(
    (waitersData: WaiterData[]): FetchWaiterSuccess => createAction(MENU_ACTION_TYPES.FETCH_WAITER_SUCCESS, waitersData)
);

export const fetchWaiterFailed = withMatcher(
    (error: Error): FetchWaiterFailed => createAction(MENU_ACTION_TYPES.FETCH_WAITER_FAILED, error)
);


