
export enum FINALIZE_ACTION_TYPES {
    SET_AGREE_POPUP = "finalize/SET_AGREE_POPUP",
    SET_AMOUNT_POPUP = "finalize/SET_AMOUNT_POPUP",
    SET_MAIN_FORM = "finalize/SET_MAIN_FORM",
    SET_CARD_PAYMENT = "finalize/SET_CARD_PAYMENT",
    SET_CHOOSE_PAYMENT = "finalize/SET_CHOOSE_PAYMENT",
    SET_SUCCESSFUL = "finalize/SET_SUCCESSFUL",

    SET_CLOSE_AGREE = "finalize/CLOSE_AGREE",

}


export type FinalizeWindowType = {
    agreePopup: boolean,
    amountPopup: boolean,
    mainForm: boolean,
    choosePaymentMethod: boolean,
    cardPayment: boolean,
    successfulPayment: boolean,
}