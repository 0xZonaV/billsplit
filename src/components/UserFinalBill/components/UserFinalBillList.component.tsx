import {
    UserFinalBillBackground,
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {Table, TableBody, TableContainer} from "@mui/material";
import UserFinalBillTotalCostComponent from "@/components/UserFinalBill/components/UserFinalBillTotalCost.component";
import UserFinalBillListRow from "@/components/UserFinalBill/components/UserFinalBillListRow.component";

const UserFinalBillList = () => {
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
                        <UserFinalBillListRow />
                        <UserFinalBillListRow />
                        <UserFinalBillListRow />
                        <UserFinalBillListRow />
                        <UserFinalBillListRow />
                        <UserFinalBillListRow />
                    </TableBody>
                </Table>
            </TableContainer>
            <UserFinalBillTotalCostComponent />
        </UserFinalBillBackground>
    )
}

export default UserFinalBillList;