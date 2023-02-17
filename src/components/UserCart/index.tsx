import UserCartHeader from "@/components/UserCart/components/UserCartHeader.component";
import {Box} from "@mui/system";
import UserCartBodyComponent from "@/components/UserCart/components/UserCartBody.component";
import UserCartOrderButton from "@/components/UserCart/components/UserCartOrderButton.component";
import UserCartAddCommentsButton from "@/components/UserCart/components/UserCartAddCommentsButton.component";

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
            <UserCartOrderButton />
            <UserCartAddCommentsButton />
        </Box>
    )
}

export default UserCartModule;