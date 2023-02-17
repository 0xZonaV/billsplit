import UserCartHeader from "@/components/UserCart/components/UserCartHeader.component";
import {Box} from "@mui/system";
import UserCartBodyComponent from "@/components/UserCart/components/UserCartBody.component";

const UserCartModule = () => {


    return(
        <Box
            sx={{
                padding: "20% 10% 0 10%",
                justifyContent: "center",
                alignContent: "center",
                display: "block",
            }}
        >
            <UserCartHeader />
            <UserCartBodyComponent />
        </Box>
    )
}

export default UserCartModule;