import UserFinalBillAvatars from "@/components/UserFinalBill/components/UserFinalBillAvatars.component";
import UserFinalBillList from "@/components/UserFinalBill/components/UserFinalBillList.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";
import {FC} from "react";
import UserFinalBillMainFormAddTipsButton
    from "@/components/UserFinalBill/components/UserFinalBillMainFormAddTipsButton.component";
import {UserData} from "@/utils/firebase/firebase.utils";

type OnMenuSplitProps = {
    NewUserTableList: () => UserData[];
    onAvatarClick: (id: string) => void;
    selectedUser: string;
    tipsAmount: number;
}

const UserFinalBillOnMenuSplitBody: FC<OnMenuSplitProps> = ({ tipsAmount, selectedUser, onAvatarClick, NewUserTableList }) => {
    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillAvatars selectedUser={selectedUser} onAvatarClick={onAvatarClick} NewUserTableList={NewUserTableList} />
            <UserFinalBillList selectedUser={selectedUser} NewUserTableList={NewUserTableList} tipsAmount={tipsAmount} />
            <UserFinalBillPaymentMethodButton />
            <UserFinalBillMainFormAddTipsButton />
        </div>
    )
}

export default UserFinalBillOnMenuSplitBody;