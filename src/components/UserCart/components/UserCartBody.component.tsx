import {
    TotalCost,
    UserCartBodyBackground,
} from "@/components/UserCart/styles/UserCartBody.styles";
import {Table, TableBody, TableContainer, TableHead} from "@mui/material";
import UserCartBodyTableTitle from "@/components/UserCart/components/UserCartBodyTableTitle.component";
import UserCartBodyTableItem from "@/components/UserCart/components/UserCartBodyTableItem.component";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "@/store/cart/cart-selector";
import {Box} from "@mui/system";

const UserCartBodyComponent = () => {



    const cart = useSelector(selectCartItems);
    const cartTotal =useSelector(selectCartTotal);



    return(
        <UserCartBodyBackground>
            <TableContainer
                sx={{
                    justifyContent: "center",
                    display: "flex",
                    maxHeight: "331px",
                    height: "331px",
                    alignItems: "flex-start",
                }}
            >
                <Table stickyHeader
                       sx={{
                           width: "237px",
                           tableLayout: "fixed"
                        }}
                >
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

            <Box
                sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    maxHeight: "86px",
                    height: "86px",
                    width: "316px",
                    alignItems: "center"
                }}
            >
                <TotalCost>
                    Итого:
                </TotalCost>
                <TotalCost
                    style={{
                        justifyContent: "right",
                        padding: "0 60px 0 0"
                    }}
                >
                    {cartTotal}
                </TotalCost>
            </Box>
        </UserCartBodyBackground>
    )
}

export default UserCartBodyComponent;