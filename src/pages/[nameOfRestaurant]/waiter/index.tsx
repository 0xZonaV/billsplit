import WaiterRegistrationForm from "@/components/WaiterPage/modules/WaiterRegistrationForm.module";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentWaiter} from "@/store/waiter/waiter-selector";
import {useEffect, useState} from "react";
import {checkWaiterSession} from "@/store/waiter/waiter-action";
import WaiterProfile from "@/components/WaiterPage/modules/WaiterProfile.module";
import SignInForm from "@/components/WaiterPage/modules/WaiterAuthForm.module";
import {NextPage} from "next";
import {WaiterPageRenderType} from "../../../../@types";
import WaiterTableListModule from "@/components/WaiterPage/modules/WaiterTableList.module";
import WaiterNotificationsModule from "@/components/WaiterPage/modules/WaiterNotifications.module";

const WaiterIndexPage: NextPage<{ nameOfRestaurant: string | string[] | undefined }> = ({ nameOfRestaurant }) => {
    const currentWaiter = useSelector(selectCurrentWaiter);
    const dispatch = useDispatch();

    const InitialWaiterPageRender: WaiterPageRenderType = {
        profile: true,
        tableList: false,
        notification: false,
    }

    const [waiterPageRender, setWaiterPageRender] = useState(InitialWaiterPageRender);

    useEffect(
        () => {
            dispatch(checkWaiterSession(nameOfRestaurant as string));
        },
        [dispatch]
    )

    const moduleToRender = () => {
        if (waiterPageRender.profile) {
            return <WaiterProfile setWaiterPageRender={setWaiterPageRender} waiterPageRender={waiterPageRender} />
        }

        if (waiterPageRender.tableList) {
            return <WaiterTableListModule setWaiterPageRender={setWaiterPageRender} waiterPageRender={waiterPageRender} />
        }

        if (waiterPageRender.notification) {
            return <WaiterNotificationsModule setWaiterPageRender={setWaiterPageRender} waiterPageRender={waiterPageRender} />
        }

        return <></>

    }

    return(
        <>
            { currentWaiter ?
                moduleToRender()
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