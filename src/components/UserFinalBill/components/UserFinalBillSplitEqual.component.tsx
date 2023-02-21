import UserFinalBillSplitEqualUserCard
    from "@/components/UserFinalBill/components/UserFinalBillSplitEqualUserCard.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";
import {UserData} from "@/utils/firebase/firebase.utils";
import {FC} from "react";

type EqualSplit = {
    totalTableAmount: number;
    NewUserTableList: () => UserData[];
}


const UserFinalBillSplitEqual:FC<EqualSplit> = ({totalTableAmount, NewUserTableList}) => {

    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillSplitEqualUserCard totalTableAmount={totalTableAmount} NewUserTableList={NewUserTableList} />
            <UserFinalBillPaymentMethodButton />
        </div>
    )
}

export default UserFinalBillSplitEqual;