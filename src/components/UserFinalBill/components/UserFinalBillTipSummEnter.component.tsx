import {
    UserFinalBillAgreePopup,
    UserFinalBillSummTextArea,
    UserFinalBillTipBackground
} from "@/components/UserFinalBill/style/UserFinalBillTip.style";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setMainForm} from "@/store/finalizeWindow/finalize-action";
import {
    UserCartCloseButtonStyle,
    UserCartPopupText,
    UserCartPopupTextAndCloseBox
} from "@/components/UserCart/styles/UserCartPopup.style";
import {ChangeEvent, FC, useState} from "react";

const UserFinalBillTipSummEnter: FC<{ setTipsInPopup: (amount: number) => void }> = ({ setTipsInPopup }) => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const setTips = () => {

        /* TODO: Add logic to add tips into firebase */
        setTipsInPopup(parseInt(inputValue));
        setInputValue("");
        dispatch(setMainForm());
    }

    return(
        <UserFinalBillTipBackground>
            <UserFinalBillAgreePopup style={{
                width: "320px",
                height: "312px",
            }}>

                    <UserCartPopupTextAndCloseBox>
                    <UserCartPopupText style={{ margin: "10% 0 0 32%" }}>
                        Чаевые
                    </UserCartPopupText>
                    <UserCartCloseButtonStyle />
                </UserCartPopupTextAndCloseBox>


                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px"
                }}
                >
                <UserFinalBillSummTextArea onChange={onInputChange} placeholder="Сумма, руб." type="number" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                    <Button sx={{
                        background: "linear-gradient(90.19deg, #1B9D4A -4.95%, #23B042 119.78%);",
                        borderRadius: "15px",
                        fontFamily: 'Doloman Pavljenko',
                        fontSize: "24px",
                        lineHeight: "23px",
                        display: "flex",
                        alignItems: "center",
                        textTransform: "none",
                        width: "199px",
                        height: "54px",
                        marginTop: "7%",

                        color: "#EBEFF3",
                    }}
                            onClick={setTips}
                    >
                        Оставить чаевые
                    </Button>
                </div>
            </UserFinalBillAgreePopup>
        </UserFinalBillTipBackground>
    )
}

export default UserFinalBillTipSummEnter;