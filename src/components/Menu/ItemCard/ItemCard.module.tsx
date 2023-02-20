import {FC} from "react";
import ItemCardHeader from "@/components/Menu/ItemCard/components/ItemHeader.component";
import {Grid} from "@mui/material";
import {MenuItem} from "@/store/menu/menu-types";
import ItemCardMiddle from "@/components/Menu/ItemCard/components/ItemCardImage.component";
import ItemCardBottom from "@/components/Menu/ItemCard/components/ItemCardBottom.component";
import {CartItemType} from "@/store/cart/cart-types";
import {CategoryRender} from "../../../../@types";

type CardProps = {
    item: MenuItem,
    cartItem: CartItemType | undefined;
    category: CategoryRender;
}

const ItemCardModule:FC<CardProps> = ({ item, cartItem, category }) => {
    return(
        <Grid container sx={{ padding: "10% 3% 10% 3%" }}>
            <ItemCardHeader itemName={item.name} />
            <ItemCardMiddle item={item} />
            <ItemCardBottom item={item} cartItem={cartItem} category={category} />
        </Grid>


    )
}

export default ItemCardModule;