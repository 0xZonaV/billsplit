import {
    setAgreePopup,
    setAmountPopup,
    setCardPayment,
    setChoosePayment,
    setMainForm,
    setSuccessful
} from "./finalize-action";
import {AnyAction} from "redux";
import {FinalizeWindowType} from "@/store/finalizeWindow/finalize-types";

const FINALIZE_WINDOW_INITIAL_STATE: FinalizeWindowType = {
    agreePopup: true,
    amountPopup: false,
    mainForm: false,
    choosePaymentMethod: false,
    cardPayment: false,
    successfulPayment: false,
}

export const finalizeWindowsReducer = (state = FINALIZE_WINDOW_INITIAL_STATE, action = {} as AnyAction): FinalizeWindowType => {

    if (setAmountPopup.match(action)) {
        return {choosePaymentMethod: false, cardPayment: false, successfulPayment: false, amountPopup: true, agreePopup: false, mainForm: false}
    }

    if (setMainForm.match(action)) {
        return { choosePaymentMethod: false, cardPayment: false, successfulPayment: false, amountPopup: false, agreePopup: false, mainForm: true };
    }

    if (setChoosePayment.match(action)) {
        return {choosePaymentMethod: true, cardPayment: false, successfulPayment: false, amountPopup: false, agreePopup: false, mainForm: false};
    }

    if (setCardPayment.match(action)) {
        return {choosePaymentMethod: false, cardPayment: true, successfulPayment: false, amountPopup: false, agreePopup: false, mainForm: false}
    }

    if (setSuccessful.match(action)) {
        return {choosePaymentMethod: false, cardPayment: false, successfulPayment: true, amountPopup: false, agreePopup: false, mainForm: false}
    }

    if (setAgreePopup.match(action)) {
        return {choosePaymentMethod: false, cardPayment: false, successfulPayment: false, amountPopup: false, agreePopup: true, mainForm: false}
    }

    return state;
}