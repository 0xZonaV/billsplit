import {MenuRestaurantTitle} from "@/components/Menu/Header/styles/Module.style";
import {FC} from "react";

const HeaderMenuRestTitle: FC<{nameOfRestaurant: string}> = ({nameOfRestaurant}) => {


    return(
        <MenuRestaurantTitle item xs={6}>
            {nameOfRestaurant}
        </MenuRestaurantTitle>
    )
}

export default HeaderMenuRestTitle;