import UserCartBodyComponent from "@/components/UserCart/components/UserCartBody.component";
import UserCartOrderButton from "@/components/UserCart/components/UserCartOrderButton.component";
import UserCartAddCommentsButton from "@/components/UserCart/components/UserCartAddCommentsButton.component";
import {ChangeEvent, useState} from "react";
import UserCartPopup from "@/components/UserCart/components/UserCartPopup.component";
import UserCartOrderSendWindow from "@/components/UserCart/components/UserCartOrderSendWindow.component";
import {addItemStart, rest} from "@/store/user/user-action";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {selectCartItems, selectCartTotal} from "@/store/cart/cart-selector";
import {clearCart} from "@/store/cart/cart-action";
import AppHeader from "@/components/AppHeader";
import {AppHeaderBox, UserCartModuleBox} from "@/components/UserCart/styles/UserCartHeader.styles";
import {UserCartPopupModuleBox} from "@/components/UserCart/styles/UserCartPopup.style";

const UserCartModule = () => {
    const dispatch = useDispatch();
    const Router = useRouter();
    const cartItems = useSelector(selectCartItems);
    const carTotal = useSelector(selectCartTotal);


    const [isPopUpRendered, setIsPopUpRendered] = useState(false);
    const [isOrderSent, setIsOrderSent] = useState(false);
    const [orderComment, setOrderComment] = useState("");


    const { nameOfRestaurant, numberOfTable } = Router.query


    const restaurant: rest = {
        nameOfRestaurant: nameOfRestaurant as string,
        tableNum: numberOfTable as string
    };


    const onCommentInputChange = (event: ChangeEvent<HTMLTextAreaElement> ) => {
        setOrderComment(event.target.value);
    }


    const ClosePopupOnClick = () => {
        setIsPopUpRendered(false);
    }

    const OpenPopupOnClick = () => {
        setIsPopUpRendered(true);
    }


    const SendOrderOnClick = async () => {
        if ((carTotal !== 0) || (orderComment !== "")) {

            try {
                dispatch(addItemStart({
                    itemsToAdd: cartItems,
                    rest: restaurant,
                    orderComments: orderComment,
                }));

                setIsOrderSent(true);
                dispatch(clearCart());
                setOrderComment('');
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Добавьте что-нибудь в заказ или добавьте комментарий')
        }
    }




    if (!isPopUpRendered && !isOrderSent) {
        return(
        <UserCartModuleBox>
            <AppHeaderBox>
                <AppHeader titleText={"Ваш заказ"} />
            </AppHeaderBox>
            <UserCartBodyComponent />
            <UserCartOrderButton sendOrder={SendOrderOnClick} />
            <UserCartAddCommentsButton OpenPopupOnClick={OpenPopupOnClick} />
        </UserCartModuleBox>
        )
    } else if (isPopUpRendered)
        {
        return (
            <UserCartPopupModuleBox>
                <UserCartPopup ClosePopupOnClick={ClosePopupOnClick} onCommentInputChange={onCommentInputChange} inputValue={orderComment} />
            </UserCartPopupModuleBox>
            )
        }
    else if (isOrderSent) {
        return(
            <UserCartOrderSendWindow />
        )
    } else {
        return (
            <>
                Error
            </>
        )
    }
}

export default UserCartModule;