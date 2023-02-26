import WaiterRegistrationForm from "@/components/WaiterPage/modules/WaiterRegistrationForm.module";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentWaiter} from "@/store/waiter/waiter-selector";
import {useEffect} from "react";
import {checkWaiterSession} from "@/store/waiter/waiter-action";
import {useRouter} from "next/router";
import WaiterProfile from "@/components/WaiterPage/modules/WaiterProfile.module";
import SignInForm from "@/components/WaiterPage/modules/WaiterAuthForm.module";
import {NextPage} from "next";

const WaiterIndexPage: NextPage<{ nameOfRestaurant: string | string[] | undefined }> = () => {
    const currentWaiter = useSelector(selectCurrentWaiter);
    const dispatch = useDispatch();
    const Router = useRouter();

    const { nameOfRestaurant } = Router.query

    useEffect(
        () => {
            dispatch(checkWaiterSession(nameOfRestaurant as string));
        },
        [dispatch]
    )

    return(
        <>
            { currentWaiter ?
                <WaiterProfile />
                :
                <>
                    <WaiterRegistrationForm />
                    <SignInForm />
                </>
            }
        </>
    )
}

WaiterIndexPage.getInitialProps = async ({query}): Promise<{
    nameOfRestaurant: string | string[] | undefined
}> => {
    const {nameOfRestaurant} = query;

    return {nameOfRestaurant};
}

export default WaiterIndexPage;