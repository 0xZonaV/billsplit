import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMenuStart, fetchWaiterStart} from "@/store/menu/menu-action";
import {useRouter} from "next/router";
import {checkUserSession, rest} from "@/store/user/user-action";
import {selectCurrentUser, selectTableUsers} from "@/store/user/user-selector";
import {setNewUsersList} from "@/store/orderInfo/orderIndo-action";

const HeadComponent = () => {

    const dispatch = useDispatch();
    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;
    const users = useSelector(selectTableUsers);
    const currentUser = useSelector(selectCurrentUser);

    const restaurant: rest = {
        nameOfRestaurant: nameOfRestaurant as string,
        tableNum: numberOfTable as string
    };

    useEffect(() => {
        dispatch(fetchMenuStart());
        dispatch(fetchWaiterStart(restaurant));
        dispatch(checkUserSession(restaurant));
    }, [dispatch]);

    useEffect(() => {
        if (users) {
            dispatch(setNewUsersList(users, currentUser))
        }
    }
    ,[users, currentUser]
    )

    return(
        <Head>
            <title>BillSplit</title>
        </Head>
    )
}

export default HeadComponent;