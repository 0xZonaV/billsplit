import {Action, ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {WAITER_ACTION_TYPES} from "./waiter-types";
import {AdditionalWaiterInformation, WaiterData} from "@/utils/firebase/firebase.types";
import {User} from "@firebase/auth";


export type SetCurrentWaiter = ActionWithPayload<WAITER_ACTION_TYPES.SET_CURRENT_USER, WaiterData>;

export type CheckWaiterSession = ActionWithPayload<WAITER_ACTION_TYPES.CHECK_USER_SESSION, string>;

export type EmailSignInStart = ActionWithPayload<WAITER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string, restaurantName: string}>;

export type SignInSuccess = ActionWithPayload<WAITER_ACTION_TYPES.SIGN_IN_SUCCESS, WaiterData>;

export type SignInFailed = ActionWithPayload<WAITER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignOutStart = Action<WAITER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<WAITER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<WAITER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export type SignUpStart = ActionWithPayload<WAITER_ACTION_TYPES.SIGN_UP_START, {email: string, password: string, additionalInformation: AdditionalWaiterInformation, restaurantName: string}>;

export type SignUpSuccess = ActionWithPayload<WAITER_ACTION_TYPES, {waiter: User, additionalInformation: AdditionalWaiterInformation, restaurantName: string}>;

export type SignUpFailed = ActionWithPayload<WAITER_ACTION_TYPES.SIGN_UP_FAILED, Error>;





export const setCurrentWaiter = withMatcher((waiter: WaiterData):SetCurrentWaiter => createAction(WAITER_ACTION_TYPES.SET_CURRENT_USER, waiter));

export const checkWaiterSession = withMatcher((restaurantName: string):CheckWaiterSession => createAction(WAITER_ACTION_TYPES.CHECK_USER_SESSION, restaurantName));

export const signInSuccess = withMatcher((waiter: WaiterData & {uId: string}):SignInSuccess => createAction(WAITER_ACTION_TYPES.SIGN_IN_SUCCESS, waiter));

export const signInFailed = withMatcher((error: Error): SignInFailed => createAction(WAITER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signOutStart = withMatcher((): SignOutStart => createAction(WAITER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(WAITER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: Error):SignOutFailed => createAction(WAITER_ACTION_TYPES.SIGN_OUT_FAILED, error));

export const signUpStart = withMatcher(
    (
        email: string,
        password: string,
        additionalInformation: AdditionalWaiterInformation,
        restaurantName: string
    ): SignUpStart =>
        createAction(
            WAITER_ACTION_TYPES.SIGN_UP_START, {
            email,
            password,
            additionalInformation,
            restaurantName
        }));

export const signUpSuccess = withMatcher(
    (
        waiter: User,
        additionalInformation: AdditionalWaiterInformation,
        restaurantName: string
    ):SignUpSuccess =>
        createAction(WAITER_ACTION_TYPES.SIGN_UP_SUCCESS,
            {
                waiter,
                additionalInformation,
                restaurantName
            }));

export const signUpFailed = withMatcher((error: Error): SignUpFailed =>
    createAction(WAITER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const emailSignInStart = withMatcher((email: string, password: string, restaurantName: string):EmailSignInStart =>
    createAction(WAITER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password, restaurantName}));
