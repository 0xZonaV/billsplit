import Head from "next/head";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchMenuStart, fetchWaiterStart} from "@/store/menu/menu-action";
import {useRouter} from "next/router";
import {checkUserSession, rest} from "@/store/user/user-action";

const HeadComponent = () => {

    const dispatch = useDispatch();
    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;

    const restaurant: rest = {
        nameOfRestaurant: nameOfRestaurant as string,
        tableNum: numberOfTable as string
    };

    useEffect(() => {
        dispatch(fetchMenuStart());
        dispatch(fetchWaiterStart(restaurant));
        dispatch(checkUserSession(restaurant));
    }, [dispatch])

    return(
        <Head>
            <title>BillSplit</title>
        </Head>
    )
}

export default HeadComponent;