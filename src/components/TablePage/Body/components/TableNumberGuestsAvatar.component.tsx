import {Box} from "@mui/system";
import {
    TableNumberGuestsAvatarEllipse,
    TableNumberGuestsAvatarText
} from "@/components/TablePage/Body/style/TableNumberGuests.style";
import AvatarPeople from "../../../../../public/icons/AvatarPeople.svg";
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
        <Box sx={{  margin: "5% 2% 0 2%", overflow: "visible", display: "flex", flexDirection: "column", alignItems: "center"  }}>
            <TableNumberGuestsAvatarEllipse  style={{ backgroundColor: "#78C853" }}>
                <AvatarPeople />
            </TableNumberGuestsAvatarEllipse>
            <TableNumberGuestsAvatarText>
                {TextToDisplay()}
            </TableNumberGuestsAvatarText>
        </Box>
    )
}

export default TableNumberGuestsAvatar;