import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "@/store/cart/cart-selector";
import {addItemToCart, decreaseItemQuantity} from "@/store/cart/cart-action";
import {CartItemType} from "@/store/cart/cart-types";
import {
    AddItemInCart,
    DecreaseItemInCart,
    NumberOfItemsInCart, TableButtonAndNumberStyle
} from "@/components/UserCart/styles/UserCartCahngeQuantityButton.style";
const UserCartChangeQuantityButton:FC<{ item: CartItemType }> = ({ item }) => {
    const dispatch = useDispatch();

    const cart = useSelector(selectCartItems);

    const DecreaseItemOnClick = () => {
        dispatch(decreaseItemQuantity(cart, item));
    }

    const AddItemOnClick = () => {
        dispatch(addItemToCart(cart, item));
    }

    return(
        <>
            <TableButtonAndNumberStyle>
            <DecreaseItemInCart style={{ marginLeft: "0", marginRight: "0" }} onClick={DecreaseItemOnClick}>-</DecreaseItemInCart>
            </TableButtonAndNumberStyle>
            <TableButtonAndNumberStyle>
            <NumberOfItemsInCart>
                {item.quantity}
            </NumberOfItemsInCart>
            </TableButtonAndNumberStyle>
            <TableButtonAndNumberStyle>
                <AddItemInCart onClick={AddItemOnClick} >+</AddItemInCart>
            </TableButtonAndNumberStyle>
        </>
    )
}

export default UserCartChangeQuantityButton;