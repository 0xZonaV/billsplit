import {FC} from "react";
import {UserData} from "@/utils/firebase/firebase.utils";
import UserFinalBillGuestAvatar from "@/components/UserFinalBill/components/UserFinalBillGuestAvatar.component";


type AvatarsProps = {
    NewUserTableList: () => UserData[];
    onAvatarClick: (id: string) => void;
    selectedUser: string;

}

const UserFinalBillAvatars: FC<AvatarsProps> = ({ NewUserTableList, selectedUser, onAvatarClick }) => {

    const UsersAvatar = () => {
            return (
                NewUserTableList().map(
                    (element, index) => {
                    return <UserFinalBillGuestAvatar
                        onAvatarClick={onAvatarClick}
                        key={index}
                        displayName={element.displayName}
                        selectedUserId={selectedUser}
                        userId={element.id}
                    />
                    }

                )
            )
    }

    return (
        <div
            style={{
                width: "314px",
                maxWidth: "314px",
                display: "flex",
                justifyContent: "left",
                marginTop: "30px",
                overflowBlock: "visible"
            }}
        >
            <div
                style={{
                    overflowX: "scroll",
                    overflowY: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                }}
            >
                {UsersAvatar()}
            </div>
        </div>
    )
}

export default UserFinalBillAvatars;