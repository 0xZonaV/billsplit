import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "@/store/cart/cart-selector";
import UserCartItemsRender from "@/components/UserCart/UserCart.functions";
import {Button} from "@mui/material";
import {setCartItems} from "@/store/cart/cart-action";
import {addItemStart} from "@/store/user/user-action";
import {NextPage} from "next";
import {AppGeneralProps} from "../../../../../../@types";

const UserCart:NextPage<AppGeneralProps> = ({nameOfRestaurant, numberOfTable}) => {
    const dispatch = useDispatch();

    const cart = useSelector(selectCartItems);

    const placeOrder = () => {
        cart.map((element) => {
            dispatch(addItemStart(
                {
                    id: element.id,
                    itemsCount: element.quantity,
                    nameOfRestaurant: nameOfRestaurant as string,
                    tableNum: numberOfTable as string,
                }
            ))
        })
        dispatch(setCartItems([]));
    }

    return(
        <>
            <UserCartItemsRender cartItems={cart} />
            <Button onClick={placeOrder}>Оформить заказ</Button>
        </>
    )
}

UserCart.getInitialProps = async ({query}): Promise<AppGeneralProps> => {
    const {numberOfTable, nameOfRestaurant} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default UserCart;