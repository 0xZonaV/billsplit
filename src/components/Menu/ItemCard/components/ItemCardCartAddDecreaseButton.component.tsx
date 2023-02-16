import {
    AddItemInMenu, DecreaseItemInMenu,
    ItemCardCartAddDecreaseBackEllipse, NumberOfItemsInMenu
} from "@/components/Menu/ItemCard/styles/ItemCardCartAddDecreaseButton.style";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, decreaseItemQuantity} from "@/store/cart/cart-action";
import {selectCartItems} from "@/store/cart/cart-selector";
import {FC} from "react";
import {CartItemType} from "@/store/cart/cart-types";
import {MenuItem} from "@/store/menu/menu-types";

const ItemCardCartAddDecreaseButton:FC<{ itemToChange: MenuItem, cartItem: CartItemType }> = ({ itemToChange, cartItem }) => {
    const dispatch = useDispatch();

    const cart = useSelector(selectCartItems);

    const DecreaseItemOnClick = () => {
        dispatch(decreaseItemQuantity(cart, itemToChange));
    }

    const AddItemOnClick = () => {
        dispatch(addItemToCart(cart, itemToChange));
    }


    return(
        <Grid item xs={12}>
        <ItemCardCartAddDecreaseBackEllipse>
            <DecreaseItemInMenu onClick={DecreaseItemOnClick}>-</DecreaseItemInMenu>
            <NumberOfItemsInMenu>
                {cartItem.quantity}
            </NumberOfItemsInMenu>
            <AddItemInMenu onClick={AddItemOnClick} >+</AddItemInMenu>
        </ItemCardCartAddDecreaseBackEllipse>
        </Grid>
    )
}

export default ItemCardCartAddDecreaseButton;