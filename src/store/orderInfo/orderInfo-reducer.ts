import {AnyAction} from "redux";
import {UserData} from "@/utils/firebase/firebase.utils";
import {
    setIsMethodMenu,
    setNewUsersList,
    setTableTotal,
    setTips,
    setUserTotalEqual,
    setUserTotalMenu
} from "@/store/orderInfo/orderIndo-action";

export type OrderInfoState = {
    readonly TableTotal: UserData[];
    readonly UserTotalEqual: UserData[];
    readonly UserTotalMenu: UserData;
    readonly Tips: number;
    readonly NewUserList: UserData[];
    readonly isMethodMenu: boolean;
}


export const ORDER_INFO_INITIAL_STATE: OrderInfoState = {
    Tips: 0,
    UserTotalEqual: [],
    // @ts-ignore
    UserTotalMenu: {},
    NewUserList: [],
    TableTotal: [],
    isMethodMenu: true,
};


export const orderInfoReducer = (state = ORDER_INFO_INITIAL_STATE, action = {} as AnyAction): OrderInfoState => {

    if (setTableTotal.match(action)) {
        return {...state, TableTotal: action.payload};
    }

    if (setUserTotalEqual.match(action)) {
        return {...state, UserTotalEqual: action.payload};
    }

    if (setUserTotalMenu.match(action)) {
        return {...state, UserTotalMenu: action.payload};
    }

    if (setNewUsersList.match(action)) {
        return {...state, NewUserList: action.payload};
    }

    if (setTips.match(action)) {
        return {...state, Tips: action.payload};
    }

    if (setIsMethodMenu.match(action)) {
        return {...state, isMethodMenu: action.payload}
    }

    return state;
}