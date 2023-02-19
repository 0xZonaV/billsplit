import TableNumberGuestsAvatar from "@/components/TablePage/Body/components/TableNumberGuestsAvatar.component";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setTableUsersStart} from "@/store/user/user-action";
import {selectCurrentUser, selectTableUsers} from "@/store/user/user-selector";
import {UserData} from "@/utils/firebase/firebase.utils";

const UserFinalBillAvatars = () => {

    const Router = useRouter();
    const dispatch = useDispatch();

    const { nameOfRestaurant, numberOfTable } = Router.query;

    useEffect(
        () => {
            dispatch(setTableUsersStart({
                nameOfRestaurant: nameOfRestaurant as string,
                tableNum: numberOfTable as string
            }));
        },
        [dispatch]
    );

    const users = useSelector(selectTableUsers);
    const currentUser = useSelector(selectCurrentUser);

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

    const UsersAvatar = () => {
            return (
                NewUserTableList().map(
                    (element, index) => {
                    return <TableNumberGuestsAvatar key={index} displayName={element.displayName} />
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