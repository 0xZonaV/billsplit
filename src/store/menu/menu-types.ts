export enum MENU_ACTION_TYPES {
    FETCH_MENU_START = "menu/FETCH_MENU_START",
    FETCH_MENU_SUCCESS = "menu/FETCH_MENU_SUCCESS",
    FETCH_MENU_FAILED = "menu/FETCH_MENU_FAILED",

    FETCH_WAITER_START = "menu/FETCH_WAITER_START",
    FETCH_WAITER_SUCCESS = "menu/FETCH_WAITER_SUCCESS",
    FETCH_WAITER_FAILED = "menu/FETCH_WAITER_FAILED",
}

export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    grammar: string;
    stock: number;
    calories: string;
    category: string;
    imgUrl: string;

}