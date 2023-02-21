import UserFinalBillSplitEqualUserCard
    from "@/components/UserFinalBill/components/UserFinalBillSplitEqualUserCard.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";
import {UserData} from "@/utils/firebase/firebase.utils";
import {FC} from "react";
import UserFinalBillMainFormAddTipsButton
    from "@/components/UserFinalBill/components/UserFinalBillMainFormAddTipsButton.component";

type EqualSplit = {
    totalTableAmount: number;
    NewUserTableList: () => UserData[];
    setTotalToPay: (totalToPay: number) => void;
}


const UserFinalBillSplitEqual:FC<EqualSplit> = ({totalTableAmount, NewUserTableList, setTotalToPay}) => {

    const totalUsers = NewUserTableList().length;
    const amountPerPerson = Math.ceil((totalTableAmount/totalUsers));

    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillSplitEqualUserCard amountPerPerson={amountPerPerson} NewUserTableList={NewUserTableList} />
            <UserFinalBillPaymentMethodButton totalToPay={amountPerPerson} setTotalToPay={setTotalToPay} />
            <UserFinalBillMainFormAddTipsButton />
        </div>
    )
}

export default UserFinalBillSplitEqual;