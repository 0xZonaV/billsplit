import {setCartItems} from "./cart-action";
import {AnyAction} from "redux";
import {CartItemType} from "@/store/cart/cart-types";
import {restaurantMenu} from "@/utils/firebase/firebase.consts";

export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItemType[];
}

export const CartItemsInitialState: CartItemType[] = restaurantMenu.map(menuItem =>  ({...menuItem, quantity: 0}));

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: CartItemsInitialState,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {} as AnyAction): CartState => {

    if (setCartItems.match(action)) {
        return {...state, cartItems: action.payload};
    }

    return state;
}