import {AnyAction, combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {menuReducer, MenuReducerState} from "@/store/menu/menu-reducer";
import {userReducer, UserState} from "@/store/user/user-reducer";

export type RootReducerType = {
    menu: MenuReducerState;
    user: UserState;
}

export const rootReducer =(state: RootReducerType | undefined, action: AnyAction) => {

    switch (action.type) {
        case HYDRATE:
            return action.payload
        default: {
            const combinedReducer = combineReducers({
                menu: menuReducer,
                user: userReducer,
            })
            return combinedReducer(state, action);
        }
    }
};