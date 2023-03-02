import {useSelector} from "react-redux";
import UserFinalBillGuestAvatar from "@/components/UserFinalBill/components/UserFinalBillGuestAvatar.component";
import {FC} from "react";
import {selectTableUsers} from "@/store/user/user-selector";

type AvatarsProps = {
    onAvatarClick: (id: string) => void;
    selectedUser: string;

}

const WaiterTableAvatarsComponent: FC<AvatarsProps> = ({ onAvatarClick, selectedUser }) => {
    const NewUsersTableList = useSelector(selectTableUsers);

    const UsersAvatar = () => {
        return (
            NewUsersTableList?.map(
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
                width: "300px",
                maxWidth: "300px",
                display: "flex",
                justifyContent: "left",
                marginTop: "5px",
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

export default WaiterTableAvatarsComponent;