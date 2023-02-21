import {TableRow} from "@mui/material";
import {TableTextStyle} from "@/components/UserCart/styles/UserCartBody.styles";
import {FC} from "react";
import {CartItemType} from "@/store/cart/cart-types";
import UserCartChangeQuantityButton from "@/components/UserCart/components/UserCartChangeQuantityButton.component";


const UserCartBodyTableItem:FC<{ item: CartItemType }> = ({item}) => {


    return(
        <TableRow>
            <TableTextStyle sx={{ maxWidth: "120px" }} >{item.name}</TableTextStyle>
            <UserCartChangeQuantityButton item={item} />
            <TableTextStyle align="center">{item.quantity * item.price}</TableTextStyle>
        </TableRow>
    )
}

export default UserCartBodyTableItem;