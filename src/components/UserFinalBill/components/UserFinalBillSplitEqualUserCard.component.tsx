import {
    UserFinalBillUserCardBox
} from "@/components/UserFinalBill/style/UserFinalBillSplitEqualUserCard.style";
import {FC} from "react";
import {UserData} from "@/utils/firebase/firebase.utils";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import UserFinalBillUserCardComponent from "@/components/UserFinalBill/components/UserFinalBillUserCard.component";

type EqualSplit = {
    amountPerPerson: number;
    NewUserTableList: () => UserData[];
}

const UserFinalBillSplitEqualUserCard: FC<EqualSplit> = ({amountPerPerson , NewUserTableList}) => {

    const currentUser = useSelector(selectCurrentUser);


    const UserCardMap = NewUserTableList().map(
        (user,index) => {

            const nameToDisplay = () => {
                if ((currentUser) && (currentUser.id === user.id)) {
                    return "Вы"
                } else return user.displayName
            }

            return <UserFinalBillUserCardComponent amount={amountPerPerson} name={nameToDisplay()} key={index} />
    })

    return(
        <UserFinalBillUserCardBox>
            {UserCardMap}
        </UserFinalBillUserCardBox>
    )
}

export default UserFinalBillSplitEqualUserCard;