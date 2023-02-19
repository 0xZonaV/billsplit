import TableNumberTitle from "@/components/TablePage/Body/components/TableNumberTitle.component";
import {FC} from "react";
import {Box} from "@mui/system";
import {TableNumberGuestsTitle} from "@/components/TablePage/Body/style/TableNumberGuests.style";
import TableNumberGuestsAvatar from "@/components/TablePage/Body/components/TableNumberGuestsAvatar.component";
import {UserData} from "@/utils/firebase.utils";
import {AvatarGroup} from "@mui/material";

type TableNumberPageBodyProps = {
    tableNumber: string;
    user: UserData;
}

const TableNumberPageBody:FC<TableNumberPageBodyProps> = ({ tableNumber, user }) => {
    return(
        <Box sx={{ padding: "10% 10% 0% 10%" }}>
            <TableNumberTitle tableNumber={tableNumber} />
            <Box sx={{ padding: "10% 3% 10% 3%" }}>
                <TableNumberGuestsTitle>
                    Гости
                </TableNumberGuestsTitle>
                <div style={{ display: "flex", justifyContent: "left", marginTop: "30px", overflowBlock: "visible",  }}>
                    <AvatarGroup max={5} sx={{ overflowBlock: "visible", justifyContent: "center"}}>
                        <TableNumberGuestsAvatar displayName={user.displayName} />
                    </AvatarGroup>
                </div>
                <Box sx={{ marginTop: "10%" }}>
                    <TableNumberGuestsTitle>
                        Ваш официант
                    </TableNumberGuestsTitle>
                </Box>

            </Box>
        </Box>
    )
}

export default TableNumberPageBody;