import {
    UserFinalBillUserCardBox
} from "@/components/UserFinalBill/style/UserFinalBillSplitEqualUserCard.style";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import UserFinalBillUserCardComponent from "@/components/UserFinalBill/components/UserFinalBillUserCard.component";
import {selectNewUsersList, selectUserTotalEqual} from "@/store/orderInfo/orderInfo-selector";

const UserFinalBillSplitEqualUserCard = () => {

    const currentUser = useSelector(selectCurrentUser);
    const NewUsersTableList = useSelector(selectNewUsersList);
    const amountPerPerson = useSelector(selectUserTotalEqual);


    const UserCardMap = NewUsersTableList.map(
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