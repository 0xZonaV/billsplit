import {createSelector} from "reselect";
import {RootState} from "../store";
import {WaiterState} from "@/store/waiter/waiter-reducer";

export const selectWaiterReducer = (state: RootState): WaiterState => state.waiter;

export const selectCurrentWaiter = createSelector(
    selectWaiterReducer,
    (waiter) => waiter.currentWaiter
);