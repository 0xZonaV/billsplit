import {
    UserFinalBillUserCardBox
} from "@/components/UserFinalBill/style/UserFinalBillSplitEqualUserCard.style";
import {FC} from "react";
import {UserData} from "@/utils/firebase/firebase.utils";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import UserFinalBillUserCardComponent from "@/components/UserFinalBill/components/UserFinalBillUserCard.component";

type EqualSplit = {
    totalTableAmount: number;
    NewUserTableList: () => UserData[];
}

const UserFinalBillSplitEqualUserCard: FC<EqualSplit> = ({totalTableAmount, NewUserTableList}) => {

    const currentUser = useSelector(selectCurrentUser);

    const totalUsers = NewUserTableList().length;
    const amountForPerson = Math.ceil((totalTableAmount/totalUsers));

    const UserCardMap = NewUserTableList().map(
        (user) => {

            const nameToDisplay = () => {
                if ((currentUser) && (currentUser.id === user.id)) {
                    return "Вы"
                } else return user.displayName
            }

            return <UserFinalBillUserCardComponent amount={amountForPerson} name={nameToDisplay()} key={user.id} />
    })

    return(
        <UserFinalBillUserCardBox>
            {UserCardMap}
        </UserFinalBillUserCardBox>
    )
}

export default UserFinalBillSplitEqualUserCard;