import {ItemCardHeaderStyle} from "@/components/Menu/ItemCard/styles/ItemHeader.style";
import {FC} from "react";

const ItemCardHeader:FC<{ itemName: string }> = ({itemName}) => {
    return(
        <ItemCardHeaderStyle item xs={12}>
            {itemName}
        </ItemCardHeaderStyle>
    )
}

export default ItemCardHeader