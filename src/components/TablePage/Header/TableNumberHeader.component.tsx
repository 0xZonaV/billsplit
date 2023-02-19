import {HeaderMenuStyle, MenuRestaurantTitle} from "@/components/Menu/Header/styles/Module.style";
import {FC} from "react";

const TableNumberHeader:FC<{ restaurantName: string }> = ({ restaurantName }) => {
    return(
        <HeaderMenuStyle>
                <MenuRestaurantTitle>
                    <div  style={{ padding: "1% 5% 5% 5%" }}>
                        {restaurantName}
                    </div>
                </MenuRestaurantTitle>
        </HeaderMenuStyle>
    )
}

export default TableNumberHeader;