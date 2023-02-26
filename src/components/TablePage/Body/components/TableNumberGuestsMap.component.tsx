import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {setTableUsersStart} from "@/store/user/user-action";
import {selectCurrentUser, selectTableUsers} from "@/store/user/user-selector";
import TableNumberGuestsAvatar from "@/components/TablePage/Body/components/TableNumberGuestsAvatar.component";
import {UserData} from "@/utils/firebase/firebase.types";

const TableNumberGuestsMapComponent = () => {

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
        []
    );

    const users = useSelector(selectTableUsers);
    const currentUser = useSelector(selectCurrentUser);


    const NewUserTableList = () => {

        const NewUserList: UserData[] = [];

        if (users && currentUser) {
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
                marginTop: "10px",
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

export default TableNumberGuestsMapComponent;