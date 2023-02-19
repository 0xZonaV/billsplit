import UserFinalBillAvatars from "@/components/UserFinalBill/components/UserFinalBillAvatars.component";
import UserFinalBillList from "@/components/UserFinalBill/components/UserFinalBillList.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";

const UserFinalBillOnMenuSplitBody = () => {
    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillAvatars />
            <UserFinalBillList />
            <UserFinalBillPaymentMethodButton />
        </div>
    )
}

export default UserFinalBillOnMenuSplitBody;