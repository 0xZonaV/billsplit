import {FC} from "react";
import {
    UserCartChangeQuantityButtonBox,
    UserCartChangeQuantityButtonStyle
} from "@/components/UserCart/styles/UserCartChangeQuantityButton.style";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "@/store/cart/cart-selector";
import {addItemToCart, decreaseItemQuantity} from "@/store/cart/cart-action";
import {CartItemType} from "@/store/cart/cart-types";

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
        <UserCartChangeQuantityButtonBox>
            <UserCartChangeQuantityButtonStyle onClick={DecreaseItemOnClick} />
            {item.quantity}
            <UserCartChangeQuantityButtonStyle style={{ transform: "scaleX(-1)" }} onClick={AddItemOnClick} />
        </UserCartChangeQuantityButtonBox>
    )
}

export default UserCartChangeQuantityButton;