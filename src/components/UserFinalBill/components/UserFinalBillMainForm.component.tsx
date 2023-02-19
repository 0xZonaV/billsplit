import UserFinalBillHeader from "@/components/UserFinalBill/components/UserFinalBillHeader.component";
import UserFinalBillChooseButtons from "@/components/UserFinalBill/components/UserFinalBillChooseButton.component";
import {
    UserFinalBillFormBox,
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {useState} from "react";
import UserFinalBillOnMenuSplitBody from "@/components/UserFinalBill/components/UserFinalBillOnMenuSplitBody.component";
import UserFinalBillSplitEqual from "@/components/UserFinalBill/components/UserFinalBillSplitEqual.component";

const UserFinalBillMainForm = () => {

    const [isSplitOnMenuFocused, setIsSplitOnMenuFocused] = useState(true);

    const changeFocusOnClick = () => {
        setIsSplitOnMenuFocused(!isSplitOnMenuFocused);
    }

    return(
        <UserFinalBillFormBox>
            <UserFinalBillHeader />
            <UserFinalBillChooseButtons changeFocus={changeFocusOnClick} isSplitOnMenuFocused={isSplitOnMenuFocused} />

            { isSplitOnMenuFocused ?
                <UserFinalBillOnMenuSplitBody />
                :
                <UserFinalBillSplitEqual />
            }

        </UserFinalBillFormBox>
    )
}

export default UserFinalBillMainForm;