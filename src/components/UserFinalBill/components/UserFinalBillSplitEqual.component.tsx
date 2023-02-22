import UserFinalBillSplitEqualUserCard
    from "@/components/UserFinalBill/components/UserFinalBillSplitEqualUserCard.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";
import UserFinalBillMainFormAddTipsButton
    from "@/components/UserFinalBill/components/UserFinalBillMainFormAddTipsButton.component";



const UserFinalBillSplitEqual = () => {

    return(
        <div style={{ overflow: "visible", maxWidth: "334px" }}>
            <UserFinalBillSplitEqualUserCard />
            <UserFinalBillPaymentMethodButton />
            <UserFinalBillMainFormAddTipsButton />
        </div>
    )
}

export default UserFinalBillSplitEqual;