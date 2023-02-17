import {TableTextStyle} from "@/components/UserCart/styles/UserCartBody.styles";
import {TableRow} from "@mui/material";

const UserCartBodyTableTitle = () => {
    return(
        <>
            <TableRow>
                <TableTextStyle>Товар</TableTextStyle>
                <TableTextStyle sx={{ whiteSpace: "nowrap" }}>Кол-Во</TableTextStyle>
                <TableTextStyle>Цена</TableTextStyle>
            </TableRow>
        </>
    )
}

export default UserCartBodyTableTitle;