export enum USER_ACTION_TYPES {
    SET_CURRENT_USER= 'user/SET_CURRENT_USER',
    GOOGLE_SIGN_IN_START= 'user/GOOGLE_SIGN_IN_START',
    SIGN_IN_SUCCESS= 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILED= 'user/SIGN_IN_FAILED',
    CHECK_USER_SESSION= 'user/CHECK_USER_SESSION',
    SIGN_OUT_START= 'user/SIGN_OUT_START',
    SIGN_OUT_SUCCESS= 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILED= 'user/SIGN_OUT_FAILED',
    ADD_ITEM_IN_ORDER_START = 'user/ADD_ITEM_IN_ORDER_START',
    ADD_ITEM_IN_ORDER_SUCCESS = 'user/ADD_ITEM_IN_ORDER_SUCCESS',
    ADD_ITEM_IN_ORDER_FAILED = 'user/ADD_ITEM_IN_ORDER_FAILED',
}