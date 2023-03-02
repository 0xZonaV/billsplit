import {
    WaiterTableUserComment,
    WaiterTableUserOrderBox, WaiterTableUserOrderItemsBox,
    WaiterTableUserOrderTitle
} from "@/components/WaiterTablePage/style/WaiterTableUserOrder.style";
import {FC} from "react";
import {useSelector} from "react-redux";
import {selectTableUsers} from "@/store/user/user-selector";

const WaiterTableUserComments:FC<{ selectedUser: string }> = ({ selectedUser }) => {

    const tableUsers = useSelector(selectTableUsers);

    const userOrder = (userId: string) => {
        if (tableUsers) {
            const user = tableUsers.find(element => element.id === userId);
            if (user) {
                return user.orderComments.map((element, index) => {
                    if (element.length > 0) {
                        return (
                            <WaiterTableUserComment key={index}>
                                {element}
                            </WaiterTableUserComment>
                        )
                    } else return
                })
            }
        }
    }

    return(
        <WaiterTableUserOrderBox>
            <WaiterTableUserOrderTitle>
                Примечания к заказу:
            </WaiterTableUserOrderTitle>
            <WaiterTableUserOrderItemsBox>
                {userOrder(selectedUser)}
            </WaiterTableUserOrderItemsBox>
        </WaiterTableUserOrderBox>
    )
}

export default WaiterTableUserComments;