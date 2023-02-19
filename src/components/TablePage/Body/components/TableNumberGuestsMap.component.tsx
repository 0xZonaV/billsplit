import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {setTableUsersStart} from "@/store/user/user-action";
import {selectTableUsers} from "@/store/user/user-selector";
import TableNumberGuestsAvatar from "@/components/TablePage/Body/components/TableNumberGuestsAvatar.component";

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
        [dispatch]
    );

    const users = useSelector(selectTableUsers);

    const UsersAvatar = () => {
        if (users !== null) {
            return (
                users.map(
                    (element, index) => {
                        return <TableNumberGuestsAvatar key={index} displayName={element.displayName} />
                    }
                )
            )
        } else return <></>
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

export default TableNumberGuestsMapComponent;