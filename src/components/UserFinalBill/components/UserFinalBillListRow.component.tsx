import {TableRow} from "@mui/material";
import {FinalBillCellText} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";

const UserFinalBillListRow = () => {
    return(
        <TableRow>
            <FinalBillCellText>Цезарь с курицей</FinalBillCellText>
            <FinalBillCellText style={{ textAlign: "right", paddingRight: "15px" }} >350</FinalBillCellText>
        </TableRow>
    )
}

export default UserFinalBillListRow;