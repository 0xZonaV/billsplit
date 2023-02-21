import {ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {CART_ACTION_TYPES, CartItemType} from "./cart-types";
import {MenuItem} from "@/store/menu/menu-types";
import {CartItemsInitialState} from "@/store/cart/cart-reducer";

const addCartItem = (cartItems: CartItemType[], productToAdd: MenuItem) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItemType[], cartItemToRemove: MenuItem) => {

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};


export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItemType[]>;


export const setCartItems = withMatcher((newCartItems: CartItemType[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems))

export const addItemToCart = (cartItems: CartItemType[], productToAdd: MenuItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const decreaseItemQuantity = (cartItems: CartItemType[], cartItemToRemove: MenuItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

export const clearCart = () => {
    return setCartItems(CartItemsInitialState);
};
