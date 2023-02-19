import TableNumberTitle from "@/components/TablePage/Body/components/TableNumberTitle.component";
import {FC} from "react";
import {Box} from "@mui/system";
import {TableNumberGuestsTitle} from "@/components/TablePage/Body/style/TableNumberGuests.style";
import TableNumberGuestsMapComponent from "@/components/TablePage/Body/components/TableNumberGuestsMap.component";

type TableNumberPageBodyProps = {
    tableNumber: string;
}

const TableNumberPageBody:FC<TableNumberPageBodyProps> = ({ tableNumber }) => {


    return(
        <Box sx={{ padding: "5% 10% 0% 10%" }}>
            <TableNumberTitle tableNumber={tableNumber} />
            <Box sx={{ padding: "5% 3% 5% 3%" }}>
                <TableNumberGuestsTitle>
                    Гости
                </TableNumberGuestsTitle>

                <TableNumberGuestsMapComponent />

                <Box sx={{ marginTop: "5%" }}>
                    <TableNumberGuestsTitle>
                        Ваш официант
                    </TableNumberGuestsTitle>
                </Box>

            </Box>
        </Box>
    )
}

export default TableNumberPageBody;