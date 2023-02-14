export enum MENU_ACTION_TYPES {
    FETCH_MENU_START = "menu/FETCH_MENU_START",
    FETCH_MENU_SUCCESS = "menu/FETCH_MENU_SUCCESS",
    FETCH_MENU_FAILED = "menu/FETCH_MENU_FAILED",
}

export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    grammar: string;
    stock: number

}