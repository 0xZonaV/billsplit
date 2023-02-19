import {Action, createAction, withMatcher} from "@/utils/reducer.utils";
import {FINALIZE_ACTION_TYPES} from "./finalize-types";


export type SetAgreePopup = Action<FINALIZE_ACTION_TYPES.SET_AGREE_POPUP>

export type SetAmountPopup = Action<FINALIZE_ACTION_TYPES.SET_AMOUNT_POPUP>

export type SetMainForm = Action<FINALIZE_ACTION_TYPES.SET_MAIN_FORM>

export type SetCardPayment = Action<FINALIZE_ACTION_TYPES.SET_CARD_PAYMENT>

export type SetChoosePayment = Action<FINALIZE_ACTION_TYPES.SET_CHOOSE_PAYMENT>

export type SetSuccessful = Action<FINALIZE_ACTION_TYPES.SET_SUCCESSFUL>








export const setAgreePopup = withMatcher((): SetAgreePopup => createAction(FINALIZE_ACTION_TYPES.SET_AGREE_POPUP ));

export const setAmountPopup = withMatcher((): SetAmountPopup => createAction(FINALIZE_ACTION_TYPES.SET_AMOUNT_POPUP));

export const setMainForm = withMatcher((): SetMainForm => createAction(FINALIZE_ACTION_TYPES.SET_MAIN_FORM));

export const setCardPayment = withMatcher((): SetCardPayment => createAction(FINALIZE_ACTION_TYPES.SET_CARD_PAYMENT));

export const setChoosePayment = withMatcher((): SetChoosePayment => createAction(FINALIZE_ACTION_TYPES.SET_CHOOSE_PAYMENT));

export const setSuccessful = withMatcher((): SetSuccessful => createAction(FINALIZE_ACTION_TYPES.SET_SUCCESSFUL));