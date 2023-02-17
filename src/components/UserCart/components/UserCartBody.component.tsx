import {
    UserCartBodyBackground,
} from "@/components/UserCart/styles/UserCartBody.styles";
import {Table, TableBody, TableContainer, TableHead} from "@mui/material";
import UserCartBodyTableTitle from "@/components/UserCart/components/UserCartBodyTableTitle.component";
import UserCartBodyTableItem from "@/components/UserCart/components/UserCartBodyTableItem.component";
import {useSelector} from "react-redux";
import {selectCartItems} from "@/store/cart/cart-selector";

const UserCartBodyComponent = () => {

    const cart = useSelector(selectCartItems);

    return(
        <UserCartBodyBackground>
            <TableContainer>
                <Table sx={{ width: "237px", tableLayout: "fixed"}}>
                    <TableHead>
                        <UserCartBodyTableTitle />
                    </TableHead>
                    <TableBody>
                        { cart.map(
                            (cartItem) => <UserCartBodyTableItem item={cartItem} key={cartItem.id} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </UserCartBodyBackground>
    )
}

export default UserCartBodyComponent;