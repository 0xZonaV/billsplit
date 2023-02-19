import {Box} from "@mui/system";
import {
    TableNumberGuestsAvatarEllipse,
    TableNumberGuestsAvatarText
} from "@/components/TablePage/Body/style/TableNumberGuests.style";
import AvatarPeople from "../../../../../public/AvatarPeople.svg";
import {FC} from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
const TableNumberGuestsAvatar:FC<{ displayName: string }> = ({ displayName }) => {
    const currentUser = useSelector(selectCurrentUser);

    const TextToDisplay = () => {
        if ((currentUser)  && (displayName === currentUser.displayName)) {
            return "Вы";
        }

        return displayName;
    }

    return(
        <Box sx={{ maxWidth: "61px", maxHeight: "107px", margin: "10% 2% 0 2%",  }}>
            <TableNumberGuestsAvatarEllipse  style={{ backgroundColor: "#5DF17E" }}>
                <AvatarPeople />
            </TableNumberGuestsAvatarEllipse>
            <TableNumberGuestsAvatarText>
                {TextToDisplay()}
            </TableNumberGuestsAvatarText>
        </Box>
    )
}

export default TableNumberGuestsAvatar;