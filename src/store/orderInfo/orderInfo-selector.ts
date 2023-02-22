import {createSelector} from "reselect";
import {RootState} from "../store";
import {OrderInfoState} from "@/store/orderInfo/orderInfo-reducer";
import {calcTableTotal, calcUserTotalEqual, calcUserTotalMenu} from "@/store/orderInfo/orderIndo-action";

const selectOrderInfoReducer = (state: RootState): OrderInfoState => state.orderInfo;

export const selectTableTotal = createSelector(
    [selectOrderInfoReducer],
    (orderInfo) => calcTableTotal(orderInfo.TableTotal)
);

export const selectUserTotalEqual = createSelector(
    [selectOrderInfoReducer],
    (orderInfo) => calcUserTotalEqual(orderInfo.UserTotalEqual)
);

export const selectUserTotalMenu = createSelector(
    [selectOrderInfoReducer],
    (orderInfo) => calcUserTotalMenu(orderInfo.UserTotalMenu)
);

export const selectTips = createSelector(
    [selectOrderInfoReducer],
    (orderInfo) => orderInfo.Tips
);

export const selectNewUsersList = createSelector(
    [selectOrderInfoReducer],
    (orderInfo) => orderInfo.NewUserList
);

export const selectIsMethodMenu = createSelector(
    [selectOrderInfoReducer],
    (orderInfo) => orderInfo.isMethodMenu
);
