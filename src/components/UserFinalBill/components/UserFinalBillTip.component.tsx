import {
    UserFinalBillAgreePopup, UserFinalBillAgreePopupButton,
    UserFinalBillAgreePopupTitle,
    UserFinalBillTipBackground
} from "@/components/UserFinalBill/style/UserFinalBillTip.style";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setAmountPopup, setMainForm} from "@/store/finalizeWindow/finalize-action";


const UserFinalBillTip = () => {

    const dispatch = useDispatch();

    const CloseTipPopup = () => {
        dispatch(setMainForm());
    }

    const OpenAmountPopup = () => {
        dispatch(setAmountPopup());
    }

    return(
        <UserFinalBillTipBackground>
            <UserFinalBillAgreePopup>
                <UserFinalBillAgreePopupTitle>
                    Хотите оставить чаевые?
                </UserFinalBillAgreePopupTitle>
                <UserFinalBillAgreePopupButton>
                    <Button sx={{
                        background: "linear-gradient(90deg, #FFAB7B -39.24%, #FFC267 129.11%)",
                        borderRadius: "17px",
                        fontFamily: 'Doloman Pavljenko',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "32px",
                        lineHeight: "31px",
                        textTransform: "none",
                        color: "#FFFFFF",
                    }}
                        onClick={CloseTipPopup}
                    >
                        Нет
                    </Button>
                    <Button sx={{
                        fontFamily: 'Doloman Pavljenko',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "32px",
                        lineHeight: "31px",
                        textTransform: "none",
                        color: "#FFFFFF",
                        background: "linear-gradient(87.74deg, #55DD75 -35.68%, #42DE67 129.92%);",
                        borderRadius: "17px",
                    }}
                            onClick={OpenAmountPopup}
                    >
                        Да
                    </Button>
                </UserFinalBillAgreePopupButton>
            </UserFinalBillAgreePopup>
        </UserFinalBillTipBackground>
    )
}

export default UserFinalBillTip;