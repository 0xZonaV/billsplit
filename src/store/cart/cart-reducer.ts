import {setCartItems} from "./cart-action";
import {AnyAction} from "redux";
import {CartItemType} from "@/store/cart/cart-types";

export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItemType[];
}

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {} as AnyAction): CartState => {

    if (setCartItems.match(action)) {
        return {...state, cartItems: action.payload};
    }

    return state;
}