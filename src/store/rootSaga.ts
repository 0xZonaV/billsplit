import {all, call} from "typed-redux-saga/";
import {menuSaga} from "@/store/menu/menu-saga";
import {userSaga} from "@/store/user/user-saga";

export function* rootSaga() {
    yield* all([call(menuSaga), call(userSaga)]);
}