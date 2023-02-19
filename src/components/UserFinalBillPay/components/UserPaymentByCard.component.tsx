import {
    UserPaymentByCardBox,
    UserPaymentByCardForm,
    UserPaymentByCardInput, UserPaymentByCardInputAndLabel,
    UserPaymentByCardLabel,
    UserPaymentByCardLower,
    UserPaymentByCardTitle
} from "@/components/UserFinalBillPay/style/UserPaymentByCard.style";
import {Button} from "@mui/material";
import {useState} from "react";
import UserSuccessfulPaymentScreen from "@/components/UserFinalBillPay/components/UserSuccesfulPaymnetScreen.component";

const UserPaymentByCard = () => {

    const [isPayed, setIsPayed] = useState(false);

    const payWaiterOnClick = () => {
        setIsPayed(true);
    }



    if (!isPayed) {
    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <UserPaymentByCardBox>
                <UserPaymentByCardTitle>
                    Добавить банковскую карту
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
                                placeholder="01/22"

                            />

                         </UserPaymentByCardInputAndLabel>


                        <UserPaymentByCardInputAndLabel>

                            <UserPaymentByCardLabel>
                                CVV
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
                        color: "#FFFFFF",
                        marginTop: "51px",
                        width: "268px",
                        height: "62px",
                    }}
                            onClick={payWaiterOnClick}
                    >
                        Оплатить 750₽
                    </Button>

                </UserPaymentByCardForm>
            </UserPaymentByCardBox>
        </div>
    )
    } else {
        return <UserSuccessfulPaymentScreen />
    }
}

export default UserPaymentByCard;