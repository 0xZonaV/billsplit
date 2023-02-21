import UserFinalBillAvatars from "@/components/UserFinalBill/components/UserFinalBillAvatars.component";
import UserFinalBillList from "@/components/UserFinalBill/components/UserFinalBillList.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";
import {FC} from "react";
import UserFinalBillMainFormAddTipsButton
    from "@/components/UserFinalBill/components/UserFinalBillMainFormAddTipsButton.component";
import {UserData} from "@/utils/firebase/firebase.utils";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";

type OnMenuSplitProps = {
    NewUserTableList: () => UserData[];
    onAvatarClick: (id: string) => void;
    selectedUser: string;
    tipsAmount: number;
    setTotalToPay: (totalToPay: number) => void
}

const UserFinalBillOnMenuSplitBody: FC<OnMenuSplitProps> = ({ tipsAmount, selectedUser, onAvatarClick, NewUserTableList, setTotalToPay }) => {
    const currentUser = useSelector(selectCurrentUser);

    const TotalToPay = () => {
        if (currentUser) {
            return currentUser.userOrder.items.reduce(
                (sum, item) => sum + (item.price * item.quantity)
            ,0)
        } else return 0
    }

    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillAvatars selectedUser={selectedUser} onAvatarClick={onAvatarClick} NewUserTableList={NewUserTableList} />
            <UserFinalBillList selectedUser={selectedUser} NewUserTableList={NewUserTableList} tipsAmount={tipsAmount} />

            { (currentUser) && (selectedUser === currentUser.id) ?
                (
                    <>
                        <UserFinalBillPaymentMethodButton totalToPay={TotalToPay()} setTotalToPay={setTotalToPay} />
                        <UserFinalBillMainFormAddTipsButton />
                    </>
                )
                :
                <></>
            }
        </div>
    )
}

export default UserFinalBillOnMenuSplitBody;