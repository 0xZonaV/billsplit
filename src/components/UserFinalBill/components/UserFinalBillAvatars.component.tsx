import {AvatarGroup} from "@mui/material";
import TableNumberGuestsAvatar from "@/components/TablePage/Body/components/TableNumberGuestsAvatar.component";

const UserFinalBillAvatars = () => {
    return(
        <div style={{ display: "flex", justifyContent: "left", marginTop: "30px", overflowBlock: "visible"  }}>
            <AvatarGroup max={5} sx={{ overflowBlock: "visible", justifyContent: "center"}}>
                <TableNumberGuestsAvatar displayName={"ZonaV"} />
            </AvatarGroup>
        </div>
    )
}

export default UserFinalBillAvatars;