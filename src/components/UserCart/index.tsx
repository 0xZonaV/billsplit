import UserCartHeader from "@/components/UserCart/components/UserCartHeader.component";
import {Box} from "@mui/system";
import UserCartBodyComponent from "@/components/UserCart/components/UserCartBody.component";
import UserCartOrderButton from "@/components/UserCart/components/UserCartOrderButton.component";
import UserCartAddCommentsButton from "@/components/UserCart/components/UserCartAddCommentsButton.component";
import {useState} from "react";
import UserCartPopup from "@/components/UserCart/components/UserCartPopup.component";

const UserCartModule = () => {

    const [isPopUpRendered, setIsPopUpRendered] = useState(false);

    const ClosePopupOnClick = () => {
        setIsPopUpRendered(false);
    }

    const OpenPopupOnClick = () => {
        setIsPopUpRendered(true);
    }

    if (!isPopUpRendered) {
        return(
        <Box
            sx={{
                padding: "20% 10% 0 10%",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap"
            }}
        >

            <UserCartHeader />
            <UserCartBodyComponent />
            <UserCartOrderButton />
            <UserCartAddCommentsButton OpenPopupOnClick={OpenPopupOnClick} />
        </Box>
        )
    } else
        {
        return (
            <div style={{
                backgroundColor: "rgba(99, 99, 99, 0.5)",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                display: "flex",
                justifyContent: "center"

            }}>
                <UserCartPopup ClosePopupOnClick={ClosePopupOnClick} />
            </div>
            )
        }
}

export default UserCartModule;