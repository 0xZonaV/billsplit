import {all, call, put, takeLatest} from "typed-redux-saga/";
import {getRestaurantMenu, getWaiterInfo} from "@/utils/firebase/firebase.utils";
import {
    fetchMenuFailed,
    fetchMenuSuccess,
    fetchWaiterFailed,
    FetchWaiterStart,
    fetchWaiterSuccess
} from "@/store/menu/menu-action";
import {MENU_ACTION_TYPES, MenuItem} from "@/store/menu/menu-types";
import {WaiterData} from "@/utils/firebase/firebase.types";

export function* fetchMenuAsync() {
    try {
        const fetchedMenu: MenuItem[] = yield* call(getRestaurantMenu, "imagine");
        yield* put(fetchMenuSuccess(fetchedMenu));
    } catch (error) {
        yield* put(fetchMenuFailed(error as Error));
    }
}

export function* fetchWaiterAsync({payload: {nameOfRestaurant, tableNum}}: FetchWaiterStart) {
    try {
        const fetchedWaiters: WaiterData[] = yield* call(getWaiterInfo, nameOfRestaurant);
        yield* put(fetchWaiterSuccess(fetchedWaiters));
    } catch (error) {
        yield* put(fetchWaiterFailed(error as Error));
    }
}



export function* onFetchMenuStart() {
    yield* takeLatest(MENU_ACTION_TYPES.FETCH_MENU_START, fetchMenuAsync);
}

export function* onFetchWaiterStart() {
    yield* takeLatest(MENU_ACTION_TYPES.FETCH_WAITER_START, fetchWaiterAsync);
}



export function* menuSaga() {
    yield* all([call(onFetchMenuStart), call(onFetchWaiterStart)]);
}


