import {
    TotalCost,
    UserCartBodyBackground,
} from "@/components/UserCart/styles/UserCartBody.styles";
import {Table, TableBody, TableContainer} from "@mui/material";
import UserCartBodyTableItem from "@/components/UserCart/components/UserCartBodyTableItem.component";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "@/store/cart/cart-selector";
import {Box} from "@mui/system";

const UserCartBodyComponent = () => {



    const cartItems = useSelector(selectCartItems);
    const cartTotal =useSelector(selectCartTotal);

    const filteredCartItems = cartItems.filter((element) => element.quantity > 0)

    return(
        <UserCartBodyBackground>
            <TableContainer
                sx={{
                    justifyContent: "center",
                    display: "flex",
                    maxHeight: "195px",
                    height: "195px",
                    alignItems: "flex-start",
                }}
            >
                <Table sx={{
                    width: "300px",
                    tableLayout: "fixed",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center"
                }}
                >
                    <TableBody>
                        { filteredCartItems.map(
                            (cartItem) => <UserCartBodyTableItem item={cartItem} key={cartItem.id} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box
                sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    maxHeight: "86px",
                    height: "86px",
                    width: "341px",
                    alignItems: "center"
                }}
            >
                <TotalCost>
                    Итого:
                </TotalCost>
                <TotalCost
                    style={{
                        justifyContent: "right",
                        padding: "0 30px 0 0"
                    }}
                >
                    {cartTotal}
                </TotalCost>
            </Box>
        </UserCartBodyBackground>
    )
}

export default UserCartBodyComponent;