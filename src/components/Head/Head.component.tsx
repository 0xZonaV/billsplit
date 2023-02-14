import Head from "next/head";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchMenuStart} from "@/store/menu/menu-action";

const HeadComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuStart());
    }, [dispatch])

    return(
        <Head>
            <title>BillSplit</title>
        </Head>
    )
}

export default HeadComponent;