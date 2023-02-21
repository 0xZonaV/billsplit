import {Button, Typography} from "@mui/material";
import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import {googleSignInStart} from "@/store/user/user-action";
import {selectCurrentUser} from "@/store/user/user-selector";
import {selectMenu} from "@/store/menu/menu-selector";
import {addItemToCart} from "@/store/cart/cart-action";
import {selectCartItems} from "@/store/cart/cart-selector";

type RestaurantIndexPageProps = {
    nameOfRestaurant?: string | string[]
}

const RestaurantIndexPage: NextPage<RestaurantIndexPageProps> = ({nameOfRestaurant}) => {

    const dispatch = useDispatch();

    const logGoogleUser = async () => {
        dispatch(googleSignInStart({nameOfRestaurant: nameOfRestaurant as string, tableNum: "1"}));
    }

    const user = useSelector(selectCurrentUser);
    const menu = useSelector(selectMenu);
    const cart = useSelector(selectCartItems);

    const onClick2 = () => {
        // @ts-ignore
        //console.log(user.userOrder.items);
        console.log(user);
    }

    // const onClick3 = async () => {
    //     dispatch(addItemStart({
    //         nameOfRestaurant: nameOfRestaurant as string,
    //         tableNum: "1",
    //         id: 1,
    //         itemsCount: 1,
    //     }));
    // }


    return(
        <>
            Restaurant Index Page
            <Button onClick={logGoogleUser}>Google Sign In</Button>
            <Button onClick={onClick2}>Check User Order</Button>

            <Button>Add Цезарь in to the order</Button>

            {menu.map((element) => {
                const onClick4 = () => {
                    dispatch(addItemToCart(cart, element));
                    console.log(cart[0].quantity);
                }

                return(
                    <div key={element.id}>
                        <Typography>{element.name}</Typography>
                        <Button onClick={onClick4}>Add to Cart {element.price}</Button>
                    </div>
                )
            })}

        </>
    )
}

RestaurantIndexPage.getInitialProps =  async ({query}): Promise<RestaurantIndexPageProps> => {
    const {nameOfRestaurant} = query;

    return {nameOfRestaurant};
}

export default RestaurantIndexPage;