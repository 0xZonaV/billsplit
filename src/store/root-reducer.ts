import {AnyAction, combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {menuReducer, MenuReducerState} from "@/store/menu/menu-reducer";
import {userReducer, UserState} from "@/store/user/user-reducer";
import {cartReducer, CartState} from "@/store/cart/cart-reducer";
import {FinalizeWindowType} from "@/store/finalizeWindow/finalize-types";
import {finalizeWindowsReducer} from "@/store/finalizeWindow/finalize-reducer";

export type RootReducerType = {
    menu: MenuReducerState;
    user: UserState;
    cart: CartState;
    finalizeWindow: FinalizeWindowType;
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
                finalizeWindow: finalizeWindowsReducer,
            })
            return combinedReducer(state, action);
        }
    }
};