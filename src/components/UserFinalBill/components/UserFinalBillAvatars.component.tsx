import {FC} from "react";
import UserFinalBillGuestAvatar from "@/components/UserFinalBill/components/UserFinalBillGuestAvatar.component";
import {useSelector} from "react-redux";
import {selectNewUsersList} from "@/store/orderInfo/orderInfo-selector";


type AvatarsProps = {
    onAvatarClick: (id: string) => void;
    selectedUser: string;

}

const UserFinalBillAvatars: FC<AvatarsProps> = ({ selectedUser, onAvatarClick }) => {

    const NewUsersTableList = useSelector(selectNewUsersList);

    const UsersAvatar = () => {
            return (
                NewUsersTableList.map(
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