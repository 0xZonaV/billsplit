import Head from "next/head";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchMenuStart, fetchWaiterStart} from "@/store/menu/menu-action";
import {useRouter} from "next/router";

const HeadComponent = () => {

    const dispatch = useDispatch();
    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;

    useEffect(() => {
        dispatch(fetchMenuStart());
        dispatch(fetchWaiterStart({nameOfRestaurant: nameOfRestaurant as string, tableNum: numberOfTable as string }));
    }, [dispatch])

    return(
        <Head>
            <title>BillSplit</title>
        </Head>
    )
}

export default HeadComponent;