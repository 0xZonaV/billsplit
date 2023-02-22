import {
    UserFinalBillBackground,
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {Table, TableBody, TableContainer} from "@mui/material";
import UserFinalBillTotalCostComponent from "@/components/UserFinalBill/components/UserFinalBillTotalCost.component";
import UserFinalBillListRow from "@/components/UserFinalBill/components/UserFinalBillListRow.component";
import {FC} from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {selectNewUsersList, selectTips} from "@/store/orderInfo/orderInfo-selector";
import {calcUserTotalMenu} from "@/store/orderInfo/orderIndo-action";

type BillListProps = {
    selectedUser: string;
}

const UserFinalBillList: FC<BillListProps> = ({selectedUser}) => {

    const currentUser = useSelector(selectCurrentUser);
    const tipsAmount = useSelector(selectTips);
    const NewUsersTableList = useSelector(selectNewUsersList);


    const billTotalByUserId = (userId: string) => {
        const user = NewUsersTableList.find(element => element.id === userId);

        if (user) {
            return  calcUserTotalMenu(user);
        }

        return 0
    }

    const userBill = (userId: string) => {
        const user = NewUsersTableList.find(element => element.id === userId);
        if (user) {
            return user.userOrder.items.map((element) => {
                if (element.quantity > 0) {
                    return <UserFinalBillListRow price={element.price} name={element.name} quantity={element.quantity} key={element.id} />
                } else return
            })
        }
    }


    return(
        <UserFinalBillBackground>
            <TableContainer
                sx={{
                    justifyContent: "center",
                    display: "flex",
                    maxHeight: "150px",
                    height: "150px",
                    alignItems: "flex-start",
                }}
            >
                <Table sx={{
                    width: "310px",
                    tableLayout: "fixed",
                }}>
                    <TableBody>
                        {userBill(selectedUser)}
                        { (currentUser) && (selectedUser === currentUser.id) ?
                            <UserFinalBillListRow
                                price={tipsAmount}
                                name={"Чаевые"}
                                quantity={1} />
                            : <></>
                        }

                    </TableBody>
                </Table>
            </TableContainer>

            <UserFinalBillTotalCostComponent tips={tipsAmount} billTotal={billTotalByUserId(selectedUser)} />
        </UserFinalBillBackground>
    )
}

export default UserFinalBillList;