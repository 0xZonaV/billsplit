import UserFinalBillHeader from "@/components/UserFinalBill/components/UserFinalBillHeader.component";
import UserFinalBillChooseButtons from "@/components/UserFinalBill/components/UserFinalBillChooseButton.component";
import {
    UserFinalBillFormBox,
} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {FC, useEffect, useState} from "react";
import UserFinalBillOnMenuSplitBody from "@/components/UserFinalBill/components/UserFinalBillOnMenuSplitBody.component";
import UserFinalBillSplitEqual from "@/components/UserFinalBill/components/UserFinalBillSplitEqual.component";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser, selectTableUsers} from "@/store/user/user-selector";
import {UserData} from "@/utils/firebase/firebase.utils";
import {useRouter} from "next/router";
import {setTableUsersStart} from "@/store/user/user-action";

const UserFinalBillMainForm: FC<{ tipsAmount: number }> = ({tipsAmount}) => {
    const Router = useRouter();
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const users = useSelector(selectTableUsers);

    useEffect(
        () => {
            dispatch(setTableUsersStart({
                nameOfRestaurant: nameOfRestaurant as string,
                tableNum: numberOfTable as string
            }));
        },
        []
    );

    console.log(users);


    const { nameOfRestaurant, numberOfTable } = Router.query;


    const selectedUserInitialState: string = currentUser ? currentUser.id : "";

    const [selectedUser, setSelectedUser] = useState(selectedUserInitialState);
    const [isSplitOnMenuFocused, setIsSplitOnMenuFocused] = useState(true);



    const changeFocusOnClick = () => {
        setIsSplitOnMenuFocused(!isSplitOnMenuFocused);
    }


    const NewUserTableList = () => {

        const NewUserList: UserData[] = [];

        if ((users !== null) && (currentUser !== null)) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].displayName === currentUser.displayName) {
                    // @ts-ignore
                    NewUserList.unshift(users[i]);

                } else {
                    NewUserList.push(users[i]);
                }

            }
        }

        return NewUserList;
    }

    const onAvatarClick = (id: string) => {
        setSelectedUser(id);
    }

    return(
        <UserFinalBillFormBox>
            <UserFinalBillHeader />
            <UserFinalBillChooseButtons changeFocus={changeFocusOnClick} isSplitOnMenuFocused={isSplitOnMenuFocused} />

            { isSplitOnMenuFocused ?
                <UserFinalBillOnMenuSplitBody NewUserTableList={NewUserTableList} selectedUser={selectedUser} onAvatarClick={onAvatarClick} tipsAmount={tipsAmount} />
                :
                <UserFinalBillSplitEqual />
            }

        </UserFinalBillFormBox>
    )
}

export default UserFinalBillMainForm;