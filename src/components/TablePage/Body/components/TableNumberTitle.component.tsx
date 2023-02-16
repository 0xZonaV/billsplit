import {
    TableNumberTitleBox,
    TableNumberTitleNumber,
    TableNumberTitleTable
} from "@/components/TablePage/Body/style/TableNumberTitle.style";
import {FC} from "react";

const TableNumberTitle:FC<{ tableNumber: string }> = ({tableNumber}) => {
    return(
        <TableNumberTitleBox>
            <TableNumberTitleTable>
                Стол
            </TableNumberTitleTable>
            <TableNumberTitleNumber>
                #{tableNumber}
            </TableNumberTitleNumber>
        </TableNumberTitleBox>
    )
}

export default TableNumberTitle;

