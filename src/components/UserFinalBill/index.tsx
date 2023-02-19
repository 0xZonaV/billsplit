import {useState} from "react";
import UserFinalBillTip from "@/components/UserFinalBill/components/UserFinalBillTip.component";
import UserFinalBillTipSummEnterComponent
    from "@/components/UserFinalBill/components/UserFinalBillTipSummEnter.component";
import UserFinalBillMainForm from "@/components/UserFinalBill/components/UserFinalBillMainForm.component";

const UserFinalBillModule = () => {
    // <UserFinalBillTip />
    // <UserFinalBillTipSummEnterComponent />

    const [TipPopupAgree, setTipPopupAgree] = useState(true);
    const [TipPopupAmount, setTipPopupAmount] = useState(false);

    const CloseTipPopupOnClick = () => {
        setTipPopupAgree(false);
    }

    const CloseAgreeAndOpenAmountOnClick = () => {
        setTipPopupAgree(false);
        setTipPopupAmount(true);
    }

    const SetTipOnClick = () => {
        setTipPopupAmount(false);
    }

    const CloseAmountPopup = () => {
        setTipPopupAmount(false);
    }



    if (TipPopupAgree) return <UserFinalBillTip CloseTipPopup={CloseTipPopupOnClick} OpenAmountPopup={CloseAgreeAndOpenAmountOnClick} />;
    else
        if (TipPopupAmount) return <UserFinalBillTipSummEnterComponent setTips={SetTipOnClick} closePopup={CloseAmountPopup} />;
    else return <UserFinalBillMainForm />
}

export default UserFinalBillModule;