import {
    UserFinalBillAgreePopup,
    UserFinalBillAgreePopupTitle,
    UserFinalBillSummEnterLine,
    UserFinalBillSummHeader,
    UserFinalBillSummTextArea,
    UserFinalBillTipBackground
} from "@/components/UserFinalBill/style/UserFinalBillTip.style";
import {Button} from "@mui/material";
import {FC} from "react";

type AmountProps = {
    closePopup: () => void;
    setTips: () => void;
}

const UserFinalBillTipSummEnter: FC<AmountProps> = ({ closePopup, setTips }) => {
    return(
        <UserFinalBillTipBackground>
            <UserFinalBillAgreePopup style={{
                width: "320px",
                height: "312px",
            }}>
                <UserFinalBillSummHeader>
                    <UserFinalBillSummEnterLine />
                    <UserFinalBillAgreePopupTitle style={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    }}>
                        чаевые
                    </UserFinalBillAgreePopupTitle>
                    <UserFinalBillSummEnterLine />
                </UserFinalBillSummHeader>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <UserFinalBillSummTextArea placeholder="Сумма, руб." type="number" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                    <Button sx={{
                        background: "linear-gradient(91.49deg, #51CF49 -0.64%, #8CD531 124.74%)",
                        borderRadius: "9px",
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