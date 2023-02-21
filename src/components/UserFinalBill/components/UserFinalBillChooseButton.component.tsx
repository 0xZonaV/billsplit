import {
    UserFinalBillChooseButton, UserFinalBillChooseButtonFocused,
    UserFinalBillChooseButtonsBox
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {FC} from "react";

const UserFinalBillChooseButtons: FC<{ isSplitOnMenuFocused: boolean, changeFocus: () => void }> = ({ isSplitOnMenuFocused, changeFocus }) => {

    if (isSplitOnMenuFocused) {
        return (
            <UserFinalBillChooseButtonsBox>
                <UserFinalBillChooseButtonFocused>
                    По позициям меню
                </UserFinalBillChooseButtonFocused>
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
                <UserFinalBillChooseButtonFocused>
                    Поровну
                </UserFinalBillChooseButtonFocused>
            </UserFinalBillChooseButtonsBox>
        )
    }
}

export default UserFinalBillChooseButtons;