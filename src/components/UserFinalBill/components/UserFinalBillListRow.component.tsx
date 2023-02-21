import {TableRow} from "@mui/material";
import {FinalBillCellText} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {FC} from "react";

const UserFinalBillListRow: FC<{ name: string, price: number, quantity: number }> = ({name, price, quantity}) => {
    return(
        <TableRow>
            <FinalBillCellText>{name}</FinalBillCellText>
            <FinalBillCellText style={{ textAlign: "right", paddingRight: "15px" }} >{price * quantity }</FinalBillCellText>
        </TableRow>
    )
}

export default UserFinalBillListRow;