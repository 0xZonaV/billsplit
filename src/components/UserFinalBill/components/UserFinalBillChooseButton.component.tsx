import {
    UserFinalBillChooseButton,
    UserFinalBillChooseButtonsBox
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {FC} from "react";

const UserFinalBillChooseButtons: FC<{ isSplitOnMenuFocused: boolean, changeFocus: () => void }> = ({ isSplitOnMenuFocused, changeFocus }) => {

    const buttonUnderlineStyle = {
        borderBottom: "3px solid #51B462",
        paddingBottom: "10px"
    }


    if (isSplitOnMenuFocused) {
        return (
            <UserFinalBillChooseButtonsBox>
                <UserFinalBillChooseButton style={buttonUnderlineStyle}>
                    По позициям меню
                </UserFinalBillChooseButton>
                <UserFinalBillChooseButton onClick={changeFocus}>
                    Поровну
                </UserFinalBillChooseButton>
            </UserFinalBillChooseButtonsBox>
        )
    } else {
        return (
            <UserFinalBillChooseButtonsBox>
                <UserFinalBillChooseButton onClick={changeFocus}>
                    По позициям меню
                </UserFinalBillChooseButton>
                <UserFinalBillChooseButton style={buttonUnderlineStyle}>
                    Поровну
                </UserFinalBillChooseButton>
            </UserFinalBillChooseButtonsBox>
        )
    }
}

export default UserFinalBillChooseButtons;