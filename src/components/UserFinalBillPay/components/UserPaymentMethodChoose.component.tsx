import {
    UserPaymentMethodChooseBox, UserPaymentMethodChooseButtonsBox,
    UserPaymentMethodChooseTitle
} from "@/components/UserFinalBillPay/style/UserPaymentMethodChoose.style";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setCardPayment, setSuccessful} from "@/store/finalizeWindow/finalize-action";

const UserPaymentMethodChoose = () => {

    const dispatch = useDispatch();

    const PayByWaiter = () => {
        dispatch(setSuccessful());
    }

    const OpenCardPaymentForm = () => {
        dispatch(setCardPayment());
    }



    return(
        <div style={{ display: "flex", justifyContent: "center", marginTop: "15%" }} >
            <UserPaymentMethodChooseBox>
                <UserPaymentMethodChooseTitle>
                    Выберите способ оплаты
                </UserPaymentMethodChooseTitle>
                <UserPaymentMethodChooseButtonsBox>
                    <Button sx={{
                        background: "linear-gradient(89.74deg, #BADCFF 8.19%, #ACB4FF 120.64%)",
                        borderRadius: "15px",
                        fontFamily: 'Doloman Pavljenko',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "24px",
                        lineHeight: "23px",
                        display: "flex",
                        alignItems: "center",
                        textTransform: "none",
                        color: "#33394B",
                        marginTop: "9%",
                        width: "231px",
                        height: "59px",
                    }}
                            onClick={PayByWaiter}
                    >
                        Наличными официанту
                    </Button>
                    <Button sx={{
                        background: "linear-gradient(89.74deg, #FDB994 8.19%, #FFE0B1 120.64%);",
                        borderRadius: "15px",
                        fontFamily: 'Doloman Pavljenko',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "24px",
                        lineHeight: "23px",
                        display: "flex",
                        alignItems: "center",
                        textTransform: "none",
                        color: "#33394B",
                        marginTop: "32px",
                        width: "231px",
                        height: "59px",
                    }}
                      onClick={OpenCardPaymentForm}
                    >
                        Картой банка онлайн
                    </Button>
                </UserPaymentMethodChooseButtonsBox>
            </UserPaymentMethodChooseBox>
        </div>
    )
}

export default UserPaymentMethodChoose;