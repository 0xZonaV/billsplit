import {
    UserPaymentByCardBox,
    UserPaymentByCardForm,
    UserPaymentByCardInput, UserPaymentByCardInputAndLabel,
    UserPaymentByCardLabel,
    UserPaymentByCardLower,
    UserPaymentByCardTitle
} from "@/components/UserFinalBillPay/style/UserPaymentByCard.style";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setSuccessful} from "@/store/finalizeWindow/finalize-action";
import {
    selectIsMethodMenu,
    selectTips,
    selectUserTotalEqual,
    selectUserTotalMenu
} from "@/store/orderInfo/orderInfo-selector";
import {sendCardPaymentMethodChosenNotification} from "@/utils/telegram/telegram.utils";
import {useRouter} from "next/router";
import {selectCurrentUser} from "@/store/user/user-selector";



const UserPaymentByCard = () => {
    const dispatch = useDispatch();
    const isMethodMenu = useSelector(selectIsMethodMenu);
    const tipsAmount = useSelector(selectTips);
    const Router = useRouter();
    const currentUser = useSelector(selectCurrentUser);
    const { numberOfTable } = Router.query;

    const totalToPay = () => {
        if (isMethodMenu) {
            return useSelector(selectUserTotalMenu)+tipsAmount
        }

        return useSelector(selectUserTotalEqual)+tipsAmount
    }


    const onClick = () => {
        sendCardPaymentMethodChosenNotification("470239748", numberOfTable as string, currentUser?.displayName as string);
        dispatch(setSuccessful());
    }

    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <UserPaymentByCardBox>
                <UserPaymentByCardTitle>
                    Оплатить картой
                </UserPaymentByCardTitle>

                <UserPaymentByCardForm>

                    <UserPaymentByCardLabel>
                        Номер карты
                    </UserPaymentByCardLabel>
                    <UserPaymentByCardInput
                        placeholder="0000 0000 0000 0000"
                        options={{
                            creditCard: true,
                        }}
                    />

                    <UserPaymentByCardLower style={{ marginTop: "20px" }}>

                        <UserPaymentByCardInputAndLabel>

                            <UserPaymentByCardLabel>
                                ММ/ГГ
                            </UserPaymentByCardLabel>

                            <UserPaymentByCardInput
                                style={{
                                    width: "121px",
                                    height: "56px"
                                }}
                                options={{
                                    date: true,
                                    datePattern: ["m", "d"]
                                }}
                                placeholder="ММ/ГГ"

                            />

                         </UserPaymentByCardInputAndLabel>


                        <UserPaymentByCardInputAndLabel>

                            <UserPaymentByCardLabel>
                                CVV/CVC
                            </UserPaymentByCardLabel>

                            <UserPaymentByCardInput
                                options={{
                                    creditCard: true,
                                    blocks: [3],
                                    numericOnly: true
                                }}
                                style={{
                                    width: "121px",
                                    height: "56px",
                                }}
                                placeholder="000"
                            />

                        </UserPaymentByCardInputAndLabel>

                </UserPaymentByCardLower>


                    <Button sx={{
                        background: "linear-gradient(90.57deg, #3DAC5E 5.49%, #1A9C4A 99.5%)",
                        borderRadius: "15px",
                        fontFamily: 'Doloman Pavljenko',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "24px",
                        lineHeight: "23px",
                        display: "flex",
                        alignItems: "center",
                        textTransform: "none",
                        color: "#EBEFF3",
                        marginTop: "51px",
                        width: "268px",
                        height: "62px",
                    }}
                            onClick={onClick}
                    >
                        Оплатить {totalToPay()}₽
                    </Button>

                </UserPaymentByCardForm>
            </UserPaymentByCardBox>
        </div>
    )
}

export default UserPaymentByCard;