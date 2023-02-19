import UserFinalBillSplitEqualUserCard
    from "@/components/UserFinalBill/components/UserFinalBillSplitEqualUserCard.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";

const UserFinalBillSplitEqual = () => {
    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillSplitEqualUserCard />
            <UserFinalBillPaymentMethodButton />
        </div>
    )
}

export default UserFinalBillSplitEqual;