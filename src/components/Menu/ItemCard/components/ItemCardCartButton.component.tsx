import {AddItemToCartButton} from "@/components/Menu/ItemCard/styles/ItemCardCartButton.style";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {FC} from "react";
import {MenuItem} from "@/store/menu/menu-types";
import {addItemToCart} from "@/store/cart/cart-action";
import {selectCartItems} from "@/store/cart/cart-selector";

type ButtonProps = {
    itemToAdd: MenuItem
}

const ItemCardCartButton:FC<ButtonProps> = ({ itemToAdd }) => {
    const dispatch = useDispatch();

    const CartItems = useSelector(selectCartItems);
    const AddItemToCart = () => {
        dispatch(addItemToCart(CartItems, itemToAdd));
    }

    return(
        <Grid item xs={12}>
            <AddItemToCartButton style={{ borderRadius: "14px",  }} onClick={AddItemToCart}>
                В корзину
            </AddItemToCartButton>
        </Grid>
    )
}

export default ItemCardCartButton;