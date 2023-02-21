import {
    UserFinalBillBackground,
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {Table, TableBody, TableContainer} from "@mui/material";
import UserFinalBillTotalCostComponent from "@/components/UserFinalBill/components/UserFinalBillTotalCost.component";
import UserFinalBillListRow from "@/components/UserFinalBill/components/UserFinalBillListRow.component";
import {FC, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";

const UserFinalBillList: FC<{ tipsAmount: number }> = ({tipsAmount}) => {

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



    const currentUserBill = () => {
        if (currentUser) {
           const userOrder = currentUser.userOrder.items;
           return userOrder.map((element) => {
               return <UserFinalBillListRow price={element.price} name={element.name} quantity={element.quantity} key={element.id} />
           })
        }

        return <></>
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
                        {currentUserBill()}
                        <UserFinalBillListRow price={tipsAmount} name={"Чаевые"} quantity={1} />
                    </TableBody>
                </Table>
            </TableContainer>
            <UserFinalBillTotalCostComponent billTotal={billTotal} />
        </UserFinalBillBackground>
    )
}

export default UserFinalBillList;