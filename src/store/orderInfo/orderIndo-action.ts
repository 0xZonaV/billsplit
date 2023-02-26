import {ActionWithPayload, createAction, withMatcher} from "@/utils/reducer.utils";
import {ORDER_INFO_ACTION_TYPES} from "@/store/orderInfo/orderInfo-types";
import {UserData} from "@/utils/firebase/firebase.types";

export type SetTableTotal = ActionWithPayload<ORDER_INFO_ACTION_TYPES.SET_TABLE_TOTAL, UserData[]>;

export type SetUserTotalEqual = ActionWithPayload<ORDER_INFO_ACTION_TYPES.SET_USER_TOTAL_EQUAL, UserData[]>;

export type SetUserTotalMenu = ActionWithPayload<ORDER_INFO_ACTION_TYPES.SET_USER_TOTAL_MENU, UserData>;

export type SetTips = ActionWithPayload<ORDER_INFO_ACTION_TYPES.SET_TIPS, number>;

export type SetNewUsersList = ActionWithPayload<ORDER_INFO_ACTION_TYPES.SET_NEW_USERS_LIST, UserData[]>;

export type SetIsMethodMenu = ActionWithPayload<ORDER_INFO_ACTION_TYPES.SET_IS_METHOD_MENU, boolean>;


export const calcTableTotal = (usersData: UserData[]) => {
    return usersData.reduce((sum, element) => {
        return sum + element.userOrder.items.reduce(
            (sum, element) =>
                sum + (element.price * element.quantity), 0
        )
    }, 0)
}

export const calcUserTotalEqual = (usersData: UserData[]) => {
    const totalUsers = usersData.length;
    return Math.ceil((calcTableTotal(usersData)/totalUsers));
}

export const calcUserTotalMenu = (user: UserData) => {
    return user.userOrder.items.reduce(
        (summ, element) =>
            summ + (element.price * element.quantity)
    ,0)
}

const NewUserTableList = (users: UserData[], currentUser: UserData | null) => {

    const NewUserList: UserData[] = [];

    if (users) {
        if (currentUser === null) {
            return users
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].displayName === currentUser.displayName) {
                // @ts-ignore
                NewUserList.unshift(users[i]);

            } else {
                NewUserList.push(users[i]);
            }

        }
    }

    return NewUserList;
}




export const setTableTotal = withMatcher((users: UserData[]):SetTableTotal =>
    createAction(ORDER_INFO_ACTION_TYPES.SET_TABLE_TOTAL, users));

export const setUserTotalEqual = withMatcher((users: UserData[]): SetUserTotalEqual =>
    createAction(ORDER_INFO_ACTION_TYPES.SET_USER_TOTAL_EQUAL, users));

export const setUserTotalMenu = withMatcher((user: UserData): SetUserTotalMenu =>
    createAction(ORDER_INFO_ACTION_TYPES.SET_USER_TOTAL_MENU, user));

export const setTips = withMatcher((tipsAmount: number): SetTips =>
    createAction(ORDER_INFO_ACTION_TYPES.SET_TIPS, tipsAmount));

export const setNewUsersList = withMatcher((users: UserData[], currentUser: UserData | null): SetNewUsersList =>
    createAction(ORDER_INFO_ACTION_TYPES.SET_NEW_USERS_LIST, NewUserTableList(users, currentUser)));

export const setIsMethodMenu = withMatcher((isMethodMenu: boolean): SetIsMethodMenu =>
    createAction(ORDER_INFO_ACTION_TYPES.SET_IS_METHOD_MENU, isMethodMenu));