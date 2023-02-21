import {
    UserFinalBillBackground,
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {Table, TableBody, TableContainer} from "@mui/material";
import UserFinalBillTotalCostComponent from "@/components/UserFinalBill/components/UserFinalBillTotalCost.component";
import UserFinalBillListRow from "@/components/UserFinalBill/components/UserFinalBillListRow.component";
import {FC, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {UserData} from "@/utils/firebase/firebase.utils";

type BillListProps = {
    NewUserTableList: () => UserData[];
    selectedUser: string;
    tipsAmount: number;
}

const UserFinalBillList: FC<BillListProps> = ({tipsAmount, selectedUser, NewUserTableList}) => {

    const currentUser = useSelector(selectCurrentUser);
    const [billTotal, setBillTotal] = useState(0);

    useEffect(
        () => {
            if (currentUser) {
                setBillTotal(
                    currentUser.userOrder.items.reduce(
                        (sum, element) =>
                            sum + (element.price * element.quantity), 0
                    ) + tipsAmount
                )
            }
        }, [tipsAmount, currentUser]
    )


    const userBill = (userId: string) => {
        const user = NewUserTableList().find(element => element.id === userId);
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
            <UserFinalBillTotalCostComponent billTotal={billTotal} />
        </UserFinalBillBackground>
    )
}

export default UserFinalBillList;