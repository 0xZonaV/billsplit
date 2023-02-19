import {RootState} from "@/store/store";
import {MenuReducerState} from "@/store/menu/menu-reducer";
import {createSelector} from "reselect";

export const selectSalesReducer = (state: RootState): MenuReducerState => state.menu;

export const selectMenu = createSelector(
    selectSalesReducer,
    (sales) => sales.menu
)

export const selectIsMenuLoading = createSelector(
    selectSalesReducer,
    (sales) => sales.isMenuLoading
)

export const selectMenuError = createSelector(
    selectSalesReducer,
    (sales) => sales.error
)

export const selectWaitersData = createSelector(
    selectSalesReducer,
    (sales) => sales.waiters
)

export const selectIsWaiterLoading = createSelector(
    selectSalesReducer,
    (sales) => sales.isWaiterLoading
)

export const selectWaiterError = createSelector(
    selectSalesReducer,
    (sales) => sales.error
)