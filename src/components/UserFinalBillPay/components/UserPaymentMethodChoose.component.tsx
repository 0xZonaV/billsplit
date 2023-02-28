import {
    RadioButtonCheckedIcon,
    RadioButtonUnCheckedIcon,
    UserPaymentMethodChooseBox,
    UserPaymentMethodChooseButtonsBox,
    UserPaymentMethodChooseTitle, UserPaymentMethodNextButton,
    UserPaymentMethodRadio,
    UserPaymentMethodRadioBox,
    UserPaymentMethodRadioIconCard,
    UserPaymentMethodRadioIconCash
} from "@/components/UserFinalBillPay/style/UserPaymentMethodChoose.style";
import {Radio} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCardPayment, setSuccessful} from "@/store/finalizeWindow/finalize-action";
import {ChangeEvent, useState} from "react";
import {sendCashPaymentMethodChosenNotification} from "@/utils/telegram/telegram.utils";
import {useRouter} from "next/router";
import {selectCurrentUser} from "@/store/user/user-selector";

const UserPaymentMethodChoose = () => {

    const dispatch = useDispatch();
    const Router = useRouter();
    const currentUser = useSelector(selectCurrentUser);
    const { numberOfTable } = Router.query;
    const choseMethodOnClick = () => {
        if (chosenMethod === "cash") {
            // @ts-ignore
            sendCashPaymentMethodChosenNotification("470239748", numberOfTable as string, currentUser?.displayName )
            dispatch(setSuccessful());
        } else if (chosenMethod === "card") {
            dispatch(setCardPayment());
        } else alert("Выберите метод оплаты")
    }

    const [chosenMethod,setChosenMethod] = useState("");

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChosenMethod(event.target.value)
    }


    return(
        <div style={{ display: "flex", justifyContent: "center", marginTop: "15%" }} >
            <UserPaymentMethodChooseBox>
                <UserPaymentMethodChooseTitle>
                    Выберите способ оплаты
                </UserPaymentMethodChooseTitle>
                <UserPaymentMethodChooseButtonsBox
                    name="ChooseMethodBox"
                    value={chosenMethod}
                    onChange={handleRadioChange}
                >
                    <UserPaymentMethodRadioBox>
                        <UserPaymentMethodRadioIconCash />
                        <UserPaymentMethodRadio
                            label="Наличными официанту"
                            control={
                            <Radio
                                icon={<RadioButtonUnCheckedIcon />}
                                checkedIcon={<RadioButtonCheckedIcon />}
                            />}
                            value="cash"
                            labelPlacement={"start"}
                        />
                    </UserPaymentMethodRadioBox>

                    <UserPaymentMethodRadioBox style={{ marginTop: "25px" }}>
                        <UserPaymentMethodRadioIconCard />
                        <UserPaymentMethodRadio
                            label="Картой онлайн"
                            control={
                                <Radio
                                    icon={<RadioButtonUnCheckedIcon />}
                                    checkedIcon={<RadioButtonCheckedIcon />}
                                />}
                            value="card"
                            labelPlacement={"start"}
                        />
                    </UserPaymentMethodRadioBox>

                </UserPaymentMethodChooseButtonsBox>

                <UserPaymentMethodNextButton onClick={choseMethodOnClick}>
                    Далее
                </UserPaymentMethodNextButton>
            </UserPaymentMethodChooseBox>
        </div>
    )
}

export default UserPaymentMethodChoose;