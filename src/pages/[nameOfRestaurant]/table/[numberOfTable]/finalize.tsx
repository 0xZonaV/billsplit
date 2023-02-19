import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "@/store/cart/cart-selector";
import {Button} from "@mui/material";
import {setCartItems} from "@/store/cart/cart-action";
import {addItemStart} from "@/store/user/user-action";
import {NextPage} from "next";
import {AppGeneralProps} from "../../../../../@types";
import UserFinalBillModule from "@/components/UserFinalBill";

const FinalizeOrder:NextPage<AppGeneralProps> = ({nameOfRestaurant, numberOfTable}) => {
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
            <UserFinalBillModule />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button sx={{
                    background: "linear-gradient(91.49deg, #51CF49 -0.64%, #8CD531 124.74%)",
                    borderRadius: "9px",
                    fontFamily: 'Doloman Pavljenko',
                    fontSize: "20px",
                    lineHeight: "19px",
                    display: "flex",
                    alignItems: "center",
                    textTransform: "none",
                    width: "240px",
                    height: "50px",
                    marginTop: "7%",

                    color: "#EBEFF3",
                }}
                >
                    Выбрать способ оплаты
                </Button>
            </div>
        </>
    )
}

FinalizeOrder.getInitialProps = async ({query}): Promise<AppGeneralProps> => {
    const {numberOfTable, nameOfRestaurant} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default FinalizeOrder;