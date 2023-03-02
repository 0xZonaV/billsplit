export type AppGeneralProps = {
    numberOfTable?: string | string[];
    nameOfRestaurant?: string | string[];
}

export type CategoryRender = {
    salads: boolean;
    pizza: boolean;
    drinks: boolean;
}

export type WaiterPageRenderType = {
    profile: boolean,
    notification: boolean,
    tableList: boolean,
}