import {MenuItem} from "@/store/menu/menu-types";

export enum CART_ACTION_TYPES {
    SET_CART_ITEMS= 'cart/SET_CART_ITEMS',
    SET_QUANTITY= 'cart/SET_QUANTITY',
    SET_COST= 'cart/SET_COST'
}


export type CartItemType = MenuItem & {
    quantity: number;
}