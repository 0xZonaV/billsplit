import UserFinalBillHeader from "@/components/UserFinalBill/components/UserFinalBillHeader.component";
import UserFinalBillChooseButtons from "@/components/UserFinalBill/components/UserFinalBillChooseButton.component";
import {
    UserFinalBillFormBox,
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {useEffect, useState} from "react";
import UserFinalBillOnMenuSplitBody from "@/components/UserFinalBill/components/UserFinalBillOnMenuSplitBody.component";
import UserFinalBillSplitEqual from "@/components/UserFinalBill/components/UserFinalBillSplitEqual.component";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {useRouter} from "next/router";
import {setTableUsersStart} from "@/store/user/user-action";
import {setIsMethodMenu} from "@/store/orderInfo/orderIndo-action";

const UserFinalBillMainForm = () => {
    const Router = useRouter();
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);

    useEffect(
        () => {
            dispatch(setTableUsersStart({
                nameOfRestaurant: nameOfRestaurant as string,
                tableNum: numberOfTable as string
            }));
        },
        []
    );



    const { nameOfRestaurant, numberOfTable } = Router.query;


    const selectedUserInitialState: string = currentUser ? currentUser.id : "";

    const [selectedUser, setSelectedUser] = useState(selectedUserInitialState);
    const [isSplitOnMenuFocused, setIsSplitOnMenuFocused] = useState(true);

    useEffect(
        () => {
            dispatch(setIsMethodMenu(isSplitOnMenuFocused))
        }
        ,[isSplitOnMenuFocused]
    );


    const changeFocusOnClick = () => {
        setIsSplitOnMenuFocused(!isSplitOnMenuFocused);
    };

    const onAvatarClick = (id: string) => {
        setSelectedUser(id);
    };


    return(
        <UserFinalBillFormBox>
            <UserFinalBillHeader />
            <UserFinalBillChooseButtons changeFocus={changeFocusOnClick} isSplitOnMenuFocused={isSplitOnMenuFocused} />

            { isSplitOnMenuFocused ?
                <UserFinalBillOnMenuSplitBody selectedUser={selectedUser} onAvatarClick={onAvatarClick} />
                :
                <UserFinalBillSplitEqual />
            }

        </UserFinalBillFormBox>
    )
}

export default UserFinalBillMainForm;