import {
    UserFinalBillUserCardBox
} from "@/components/UserFinalBill/style/UserFinalBillSplitEqualUserCard.style";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import UserFinalBillUserCardComponent from "@/components/UserFinalBill/components/UserFinalBillUserCard.component";
import {selectNewUsersList, selectTips, selectUserTotalEqual} from "@/store/orderInfo/orderInfo-selector";

const UserFinalBillSplitEqualUserCard = () => {

    const currentUser = useSelector(selectCurrentUser);
    const NewUsersTableList = useSelector(selectNewUsersList);
    const amountPerPerson = useSelector(selectUserTotalEqual);
    const tipsAmount = useSelector(selectTips);


    const UserCardMap = NewUsersTableList.map(
        (user,index) => {

            const nameToDisplay = () => {
                if ((currentUser) && (currentUser.id === user.id)) {
                    return "Вы"
                } else return user.displayName
            }

            const amountToDisplay = () => {
                if ((currentUser) && (currentUser.id === user.id)) {
                    return amountPerPerson+tipsAmount
                } else return amountPerPerson
            }

            return <UserFinalBillUserCardComponent amount={amountToDisplay()} name={nameToDisplay()} key={index} />
    })

    return(
        <UserFinalBillUserCardBox>
            {UserCardMap}
        </UserFinalBillUserCardBox>
    )
}

export default UserFinalBillSplitEqualUserCard;