import {CartItemType} from "@/store/cart/cart-types";
import {FC} from "react";
import {Typography} from "@mui/material";



const UserCartItemsRender:FC<{cartItems: CartItemType[]}> = ({cartItems}) => {
    const UserCartItems = cartItems.map(
        (element) => {
            const {id, quantity, grammar, name, price, stock, description} = element;
            return (
                <Typography>
                    {name}
                    {quantity}
                </Typography>
            )
        }
    );

    return(
        <div>
            {UserCartItems}
        </div>
    )
}

export default UserCartItemsRender;