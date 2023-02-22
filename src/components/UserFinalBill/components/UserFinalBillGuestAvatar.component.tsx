import {Box} from "@mui/system";
import AvatarPeople from "../../../../public/icons/AvatarPeople.svg";
import {FC} from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {
    UserFinalBillGuestAvatarEllipse,
    UserFinalBillGuestAvatarText
} from "@/components/UserFinalBill/style/UserFinalBillGeustAvatar.style";

type GuestAvatar = {
    displayName: string,
    selectedUserId: string;
    userId: string,
    onAvatarClick: (id: string) => void
}

const UserFinalBillGuestAvatar:FC<GuestAvatar> = ({ onAvatarClick, displayName, selectedUserId, userId }) => {
    const currentUser = useSelector(selectCurrentUser);

    const TextToDisplay = () => {
        if ((currentUser)  && (displayName === currentUser.displayName)) {
            return "Вы";
        }

        return displayName;
    }

    const isSelected = () => {
        if (userId === selectedUserId) {
            return {border: "3px solid #F29662", backgroundColor: "#49B265" }
        }

        return {}
    }

    const onClick = () => {
        onAvatarClick(userId)
    }

    return(
        <Box sx={{  margin: "5% 2% 0 2%", overflow: "visible", display: "flex", flexDirection: "column", alignItems: "center"  }}>
            <UserFinalBillGuestAvatarEllipse  style={ isSelected() }  onClick={onClick}>
                <AvatarPeople />
            </UserFinalBillGuestAvatarEllipse>
            <UserFinalBillGuestAvatarText>
                {TextToDisplay()}
            </UserFinalBillGuestAvatarText>
        </Box>
    )
}

export default UserFinalBillGuestAvatar;