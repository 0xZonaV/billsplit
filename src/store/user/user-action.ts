import {Action, ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {USER_ACTION_TYPES} from "./user-types";
import {UserData} from "@/utils/firebase/firebase.types";
import {CartItemType} from "@/store/cart/cart-types";

const {
    SET_CURRENT_USER,
    CHECK_USER_SESSION,
    GOOGLE_SIGN_IN_START,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILED,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    ADD_ITEM_IN_ORDER_START,
    ADD_ITEM_IN_ORDER_FAILED,
    ADD_ITEM_IN_ORDER_SUCCESS,
    SET_TABLE_USERS_START,
    SET_TABLE_USERS_SUCCESS,
    SET_TABLE_USERS_FAILED
} = USER_ACTION_TYPES;

export type rest = {
    nameOfRestaurant: string,
    tableNum: string,
}

export type ItemsToAddType = {
    itemsToAdd: CartItemType[],
    rest: rest,
    orderComments: string,
}

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;

export type CheckUserSession = ActionWithPayload<USER_ACTION_TYPES.CHECK_USER_SESSION, rest>;

export type GoogleSignInStart = ActionWithPayload<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, rest>;

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export type AddItemStart = ActionWithPayload<USER_ACTION_TYPES.ADD_ITEM_IN_ORDER_START, ItemsToAddType>;

export type AddItemSuccess = ActionWithPayload<USER_ACTION_TYPES.ADD_ITEM_IN_ORDER_SUCCESS, UserData>;

export type AddItemFailed = ActionWithPayload<USER_ACTION_TYPES.ADD_ITEM_IN_ORDER_FAILED, Error>;

export type SetTableUsersStart = ActionWithPayload<USER_ACTION_TYPES.SET_TABLE_USERS_START, rest>;

export type SetTableUsersSuccess = ActionWithPayload<USER_ACTION_TYPES.SET_TABLE_USERS_SUCCESS, UserData[]>;

export type SetTableUsersFailed = ActionWithPayload<USER_ACTION_TYPES.SET_TABLE_USERS_FAILED, Error>;




export const setCurrentUser = withMatcher((user: UserData):SetCurrentUser => createAction(SET_CURRENT_USER, user));

export const checkUserSession = withMatcher((rest: rest):CheckUserSession => createAction(CHECK_USER_SESSION, rest));

export const googleSignInStart = withMatcher((rest: rest):GoogleSignInStart => createAction(GOOGLE_SIGN_IN_START, rest));

export const signInSuccess = withMatcher((user: UserData & {uId: string}):SignInSuccess => createAction(SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((error: Error): SignInFailed => createAction(SIGN_IN_FAILED, error));

export const signOutStart = withMatcher((): SignOutStart => createAction(SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: Error):SignOutFailed => createAction(SIGN_OUT_FAILED, error));

export const addItemStart = withMatcher( (addItems: ItemsToAddType): AddItemStart => createAction(ADD_ITEM_IN_ORDER_START, addItems));

export const addItemSuccess = withMatcher( (user: UserData & {id: string}): AddItemSuccess => createAction(ADD_ITEM_IN_ORDER_SUCCESS, user));

export const addItemFailed = withMatcher( (error: Error): AddItemFailed => createAction(ADD_ITEM_IN_ORDER_FAILED, error));

export const setTableUsersStart = withMatcher( (rest: rest): SetTableUsersStart => createAction(SET_TABLE_USERS_START, rest));

export const setTableUsersSuccess = withMatcher( (users: UserData[]): SetTableUsersSuccess => createAction(SET_TABLE_USERS_SUCCESS, users));

export const setTableUsersFailed = withMatcher( (error: Error): SetTableUsersFailed => createAction(SET_TABLE_USERS_FAILED, error));