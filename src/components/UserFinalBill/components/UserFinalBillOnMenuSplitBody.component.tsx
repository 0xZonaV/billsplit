import UserFinalBillAvatars from "@/components/UserFinalBill/components/UserFinalBillAvatars.component";
import UserFinalBillList from "@/components/UserFinalBill/components/UserFinalBillList.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";
import {FC} from "react";
import UserFinalBillMainFormAddTipsButton
    from "@/components/UserFinalBill/components/UserFinalBillMainFormAddTipsButton.component";

const UserFinalBillOnMenuSplitBody: FC<{ tipsAmount: number }> = ({ tipsAmount }) => {
    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillAvatars />
            <UserFinalBillList tipsAmount={tipsAmount} />
            <UserFinalBillPaymentMethodButton />
            <UserFinalBillMainFormAddTipsButton />
        </div>
    )
}

export default UserFinalBillOnMenuSplitBody;