import UserFinalBillAvatars from "@/components/UserFinalBill/components/UserFinalBillAvatars.component";
import UserFinalBillList from "@/components/UserFinalBill/components/UserFinalBillList.component";
import UserFinalBillPaymentMethodButton
    from "@/components/UserFinalBill/components/UserFinalBillPaymentMethodButton.component";
import {FC} from "react";
import UserFinalBillMainFormAddTipsButton
    from "@/components/UserFinalBill/components/UserFinalBillMainFormAddTipsButton.component";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";

type OnMenuSplitProps = {
    onAvatarClick: (id: string) => void;
    selectedUser: string;
}

const UserFinalBillOnMenuSplitBody: FC<OnMenuSplitProps> = ({ selectedUser, onAvatarClick }) => {
    const currentUser = useSelector(selectCurrentUser);

    return(
        <div style={{ overflow: "visible" }}>
            <UserFinalBillAvatars selectedUser={selectedUser} onAvatarClick={onAvatarClick} />

            <UserFinalBillList selectedUser={selectedUser} />

            { (currentUser) && (selectedUser === currentUser.id) ?
                (
                    <>
                        <UserFinalBillPaymentMethodButton  />
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