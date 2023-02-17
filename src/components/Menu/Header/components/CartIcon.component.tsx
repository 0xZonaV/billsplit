import {useSelector} from "react-redux";
import {FC} from "react";
import {selectCartQuantity} from "@/store/cart/cart-selector";
import {useRouter} from "next/router";
import {
    ShoppingBagContainer,
    ShoppingBagIcon,
    ShoppingBagItemCount
} from "@/components/Menu/Header/styles/CartIcon.styles";

const CartIcon: FC = () => {
    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;

    const redirectToCart = () => {
        Router.push(`/${nameOfRestaurant}/table/${numberOfTable}/user/cart`);
    }
    const allQuantity = useSelector(selectCartQuantity);

    return(
        <ShoppingBagContainer onClick={redirectToCart} item xs={3}>
            <ShoppingBagIcon className='shopping-icon' />
            <ShoppingBagItemCount>{allQuantity}</ShoppingBagItemCount>
        </ShoppingBagContainer>
    )
}

export default CartIcon;