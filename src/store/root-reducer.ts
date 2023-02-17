import {AnyAction, combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {menuReducer, MenuReducerState} from "@/store/menu/menu-reducer";
import {userReducer, UserState} from "@/store/user/user-reducer";
import {cartReducer, CartState} from "@/store/cart/cart-reducer";

export type RootReducerType = {
    menu: MenuReducerState;
    user: UserState;
    cart: CartState;
}

export const rootReducer =(state: RootReducerType | undefined, action: AnyAction) => {

    switch (action.type) {
        case HYDRATE:
            return action.payload
        default: {
            const combinedReducer = combineReducers({
                menu: menuReducer,
                user: userReducer,
                cart: cartReducer,
            })
            return combinedReducer(state, action);
        }
    }
};