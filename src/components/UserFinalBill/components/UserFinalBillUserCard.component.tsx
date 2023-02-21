import {
    UserCardName,
    UserFinalBillAvatar,
    UserFinalBillCardBackground
} from "@/components/UserFinalBill/style/UserFinalBillSplitEqualUserCard.style";
import AvatarPeople from "../../../../public/AvatarPeople.svg";
import {FC} from "react";

const UserFinalBillUserCardComponent: FC<{ name: string, amount: number }> = ({ name, amount }) => {
    return(
        <UserFinalBillCardBackground>
            <UserFinalBillAvatar>
                <AvatarPeople />
            </UserFinalBillAvatar >
            <UserCardName>
                {name}
            </UserCardName>
            <UserCardName>
                {amount}
            </UserCardName>
        </UserFinalBillCardBackground>
    )
}

export default UserFinalBillUserCardComponent