import {ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {CART_ACTION_TYPES, CartItemType} from "./cart-types";
import {MenuItem} from "@/store/menu/menu-types";

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

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
        }
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems: CartItemType[], cartItemToClear: MenuItem) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

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

export const removeItem = (cartItems: CartItemType[], cartItemToClear: MenuItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};
