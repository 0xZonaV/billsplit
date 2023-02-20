import {Grid} from "@mui/material";
import {
    ItemCardBottomCurrency,
    ItemCardBottomGrammar, ItemCardBottomGrammarBox,
    ItemCardBottomPrice,
    ItemCardBottomPRiceBox
} from "@/components/Menu/ItemCard/styles/ItemCardBottom.style";
import {FC} from "react";
import {MenuItem} from "@/store/menu/menu-types";
import ItemCardCartButton from "@/components/Menu/ItemCard/components/ItemCardCartButton.component";
import {CartItemType} from "@/store/cart/cart-types";
import ItemCardCartAddDecreaseButton
    from "@/components/Menu/ItemCard/components/ItemCardCartAddDecreaseButton.component";

type ItemCardBottomProps = {
    item: MenuItem;
    cartItem: CartItemType | undefined;

}

const ItemCardBottom:FC<ItemCardBottomProps> = ({item, cartItem }) => {
    const ButtonToRender = () => {
        if ((!cartItem) || ((cartItem) && (cartItem.quantity === 0))) {
            return <ItemCardCartButton  itemToAdd={item} />
        }

        return <ItemCardCartAddDecreaseButton  cartItem={cartItem} itemToChange={item} />
    }

    return(
        <Grid container spacing={2} sx={{ marginTop: "2%" }}>
            <ItemCardBottomGrammar item xs={6}>
                <ItemCardBottomGrammarBox>
                {item.grammar} гр
                    <div>
                КБЖУ: {item.calories}
                    </div>
                </ItemCardBottomGrammarBox>
            </ItemCardBottomGrammar>
            <ItemCardBottomPRiceBox>
                <ItemCardBottomPrice>
                    {item.price}
                </ItemCardBottomPrice>
                <ItemCardBottomCurrency>
                    РУБ.
                </ItemCardBottomCurrency>
                {ButtonToRender()}
            </ItemCardBottomPRiceBox>
        </Grid>
    )
}

export default ItemCardBottom;