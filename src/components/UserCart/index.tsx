import UserCartHeader from "@/components/UserCart/components/UserCartHeader.component";
import {Box} from "@mui/system";
import UserCartBodyComponent from "@/components/UserCart/components/UserCartBody.component";
import UserCartOrderButton from "@/components/UserCart/components/UserCartOrderButton.component";
import UserCartAddCommentsButton from "@/components/UserCart/components/UserCartAddCommentsButton.component";
import {ChangeEvent, useState} from "react";
import UserCartPopup from "@/components/UserCart/components/UserCartPopup.component";
import UserCartOrderSendWindow from "@/components/UserCart/components/UserCartOrderSendWindow.component";
import {addItemStart, rest} from "@/store/user/user-action";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {selectCartItems} from "@/store/cart/cart-selector";
import {selectCurrentUser} from "@/store/user/user-selector";

const UserCartModule = () => {

    const [isPopUpRendered, setIsPopUpRendered] = useState(false);
    const [isOrderSent, setIsOrderSent] = useState(false);
    const [orderComment, setOrderComment] = useState("");

    const dispatch = useDispatch();
    const Router = useRouter();
    const cartItems = useSelector(selectCartItems);
    const user = useSelector(selectCurrentUser);

    const { nameOfRestaurant, numberOfTable } = Router.query;
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
        dispatch(addItemStart({
            itemsToAdd: cartItems,
            rest: restaurant
        }));

        setIsOrderSent(true);

    }

    const closeOrderOnClick = () => {
        setIsOrderSent(false);
    }





    if (!isPopUpRendered && !isOrderSent) {
        return(
        <Box
            sx={{
                padding: "20% 10% 0 10%",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap"
            }}
        >

            <UserCartHeader />
            <UserCartBodyComponent />
            <UserCartOrderButton sendOrder={SendOrderOnClick} />
            <UserCartAddCommentsButton OpenPopupOnClick={OpenPopupOnClick} />
        </Box>
        )
    } else if (isPopUpRendered)
        {
        return (
            <div style={{
                backgroundColor: "rgba(99, 99, 99, 0.5)",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
            }}>
                <UserCartPopup ClosePopupOnClick={ClosePopupOnClick} onCommentInputChange={onCommentInputChange} inputValue={orderComment} />
            </div>
            )
        }
    else if (isOrderSent) {
        return(
            <UserCartOrderSendWindow routeOnClick={closeOrderOnClick} />
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