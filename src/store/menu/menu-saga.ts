import {all, call, put, takeLatest} from "typed-redux-saga/";
import {getRestaurantMenu} from "@/utils/firebase.utils";
import {fetchMenuFailed, fetchMenuSuccess} from "@/store/menu/menu-action";
import {MENU_ACTION_TYPES, MenuItem} from "@/store/menu/menu-types";

export function* fetchMenuAsync() {
    try {
        const fetchedMenu: MenuItem[] = yield* call(getRestaurantMenu, "imagine");
        yield* put(fetchMenuSuccess(fetchedMenu));
    } catch (error) {
        yield* put(fetchMenuFailed(error as Error));
    }
}

export function* onFetchMenuStart() {
    yield* takeLatest(MENU_ACTION_TYPES.FETCH_MENU_START, fetchMenuAsync);
}

export function* menuSaga() {
    yield* all([call(onFetchMenuStart)]);
}


