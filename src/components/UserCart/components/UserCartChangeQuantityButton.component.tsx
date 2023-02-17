import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "@/store/cart/cart-selector";
import {addItemToCart, decreaseItemQuantity} from "@/store/cart/cart-action";
import {CartItemType} from "@/store/cart/cart-types";
import Arrow from "../../../../public/GreenArrowLeft.svg";
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
            <Arrow onClick={DecreaseItemOnClick} style={{ marginRight: "4px" }} />
                {item.quantity}
            <Arrow style={{ transform: "scaleX(-1)", marginLeft: "4px" }} onClick={AddItemOnClick} />
        </>
    )
}

export default UserCartChangeQuantityButton;