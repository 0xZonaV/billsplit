import {
    WaiterTableUserOrderBox, WaiterTableUserOrderItemName, WaiterTableUserOrderItemsBox,
    WaiterTableUserOrderTitle
} from "@/components/WaiterTablePage/style/WaiterTableUserOrder.style";
import {FC} from "react";
import {useSelector} from "react-redux";
import {selectTableUsers} from "@/store/user/user-selector";

const WaiterTableUserOrder:FC<{ selectedUser: string }> = ({ selectedUser }) => {

    const tableUsers = useSelector(selectTableUsers);

    const userOrder = (userId: string) => {
        if (tableUsers) {
            const user = tableUsers.find(element => element.id === userId);
            if (user) {
                return user.userOrder.items.map((element) => {
                    if (element.quantity > 0) {
                        return (
                            <WaiterTableUserOrderItemName key={element.id}>
                                {element.name}
                            </WaiterTableUserOrderItemName>
                        )
                    } else return
                })
            }
        }
    }

    return(
        <WaiterTableUserOrderBox>
            <WaiterTableUserOrderTitle>
                ЗАКАЗ:
            </WaiterTableUserOrderTitle>
            <WaiterTableUserOrderItemsBox>
                {userOrder(selectedUser)}
            </WaiterTableUserOrderItemsBox>
        </WaiterTableUserOrderBox>
    )
}

export default WaiterTableUserOrder;