import {CartItemType} from "@/store/cart/cart-types";

export type WaiterData = {
    firstName: string;
    id: number;
    imgUrl: string;
    lastName: string;
    middleName: string;
    role: string;
    schedule: string;
    workDays: WorkDaysType[];
}

export type AdditionalInformation = {
    displayName?: string;

};

export type AdditionalWaiterInformation = {
    firstName: string;
    imgUrl: string;
    lastName: string;
    middleName: string;
    schedule: string;
    tables: string[];
}


export type UserOrder = {
    items: CartItemType[];
}

export type UserData = {
    displayName: string;

    id: "";
    email: string;
    role: string;
    orderComments: string[];
    userOrder: UserOrder;

}

export type WorkDaysType = {
    date: string,
    time: string,
    tips: number,
    rate: number,
}