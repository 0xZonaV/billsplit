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
                        background: "linear-gradient(90deg, #F1A174 -39.24%, #F1A174 129.11%)",
                        borderRadius: "15px",
                        fontFamily: 'Doloman Pavljenko',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "32px",
                        lineHeight: "31px",
                        width: "79px",
                        height: "53px",
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
                        background: "linear-gradient(87.74deg, #22A04F -35.68%, #3DAC5E 129.92%)",
                        borderRadius: "15px",
                        width: "79px",
                        height: "53px",
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