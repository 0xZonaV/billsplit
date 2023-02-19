import {
    UserCardName,
    UserFinalBillAvatar,
    UserFinalBillCardBackground,
    UserFinalBillUserCardBox
} from "@/components/UserFinalBill/style/UserFinalBillSplitEqualUserCard.style";
import AvatarPeople from "../../../../public/AvatarPeople.svg";

const UserFinalBillSplitEqualUserCard = () => {
    return(
        <UserFinalBillUserCardBox>
            <UserFinalBillCardBackground>
                <UserFinalBillAvatar style={{ backgroundColor: "#5DF17E" }}>
                    <AvatarPeople />
                </UserFinalBillAvatar>
                <UserCardName>
                    ZonaV
                </UserCardName>
                <UserCardName>
                    700
                </UserCardName>
            </UserFinalBillCardBackground>

            <UserFinalBillCardBackground>
                <UserFinalBillAvatar style={{ backgroundColor: "#5DF17E" }}>
                    <AvatarPeople />
                </UserFinalBillAvatar>
            </UserFinalBillCardBackground>

            <UserFinalBillCardBackground>
                <UserFinalBillAvatar style={{ backgroundColor: "#5DF17E" }}>
                    <AvatarPeople />
                </UserFinalBillAvatar>
            </UserFinalBillCardBackground>

            <UserFinalBillCardBackground>
                <UserFinalBillAvatar style={{ backgroundColor: "#5DF17E" }}>
                    <AvatarPeople />
                </UserFinalBillAvatar>
            </UserFinalBillCardBackground>

            <UserFinalBillCardBackground>
                <UserFinalBillAvatar style={{ backgroundColor: "#5DF17E" }}>
                    <AvatarPeople />
                </UserFinalBillAvatar>
            </UserFinalBillCardBackground>

            <UserFinalBillCardBackground>
                <UserFinalBillAvatar style={{ backgroundColor: "#5DF17E" }}>
                    <AvatarPeople />
                </UserFinalBillAvatar>
            </UserFinalBillCardBackground>
        </UserFinalBillUserCardBox>
    )
}

export default UserFinalBillSplitEqualUserCard;