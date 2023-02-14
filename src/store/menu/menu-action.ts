import {Action, ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {MENU_ACTION_TYPES, MenuItem} from "@/store/menu/menu-types";


export type FetchMenuStart = Action<MENU_ACTION_TYPES.FETCH_MENU_START>;

export type FetchMenuSuccess = ActionWithPayload<MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, MenuItem[]>

export type FetchMenuFailed = ActionWithPayload<MENU_ACTION_TYPES.FETCH_MENU_FAILED, Error>




export const fetchMenuStart = withMatcher(
    (): FetchMenuStart => createAction(MENU_ACTION_TYPES.FETCH_MENU_START, )
);

export const fetchMenuSuccess = withMatcher(
    (menu: MenuItem[]): FetchMenuSuccess => createAction(MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, menu)
);

export const fetchMenuFailed = withMatcher(
    (error: Error): FetchMenuFailed => createAction(MENU_ACTION_TYPES.FETCH_MENU_FAILED, error)
);


