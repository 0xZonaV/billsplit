import {
    CallWaiterButton, CallWaiterButtonPressed,
    WaiterAvatarImage,
    WaiterCardBox,
    WaiterName
} from "@/components/TablePage/WaiterCard/style/Module.style";
import {Box} from "@mui/system";
import {TableNumberGuestsAvatarEllipse} from "@/components/TablePage/Body/style/TableNumberGuests.style";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectIsWaiterLoading, selectWaitersData} from "@/store/menu/menu-selector";
import CheckIcon from "../../../../public/icons/checkIcon.svg";
import {sendCallWaiterNotification} from "@/utils/telegram/telegram.utils";
import {useRouter} from "next/router";
import {selectCurrentUser} from "@/store/user/user-selector";

const WaiterCardModule = () => {

    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const Router = useRouter();
    const currentUser = useSelector(selectCurrentUser);
    const { numberOfTable } = Router.query;

    const callWaiterOnClick = () => {
        // @ts-ignore
        sendCallWaiterNotification("470239748", numberOfTable as string, currentUser?.displayName);
        setIsButtonPressed(!isButtonPressed);
    }

    const waitersInfo = useSelector(selectWaitersData);
    const isWaitersLoading = useSelector(selectIsWaiterLoading);



    if (waitersInfo.length > 0) {
        const TableWaiter = waitersInfo.find((element) => element.id === 0);

        if (TableWaiter) {
            const {firstName, imgUrl} = TableWaiter;

            return (
                <Box sx={{padding: "3% 0% 0% 8%", width: "90.9vw", height: "15.65vh"}}>
                    <WaiterCardBox>
                        <TableNumberGuestsAvatarEllipse>
                            <WaiterAvatarImage src={imgUrl} alt={firstName} width="61" height="61"/>
                        </TableNumberGuestsAvatarEllipse>
                        <WaiterName>
                            {firstName}
                        </WaiterName>
                        {isButtonPressed ? (
                            <CallWaiterButtonPressed onClick={callWaiterOnClick}>
                                <CheckIcon/>
                            </CallWaiterButtonPressed>
                        ) : (
                            <CallWaiterButton onClick={callWaiterOnClick}>
                                Позвать
                            </CallWaiterButton>
                        )
                        }

                    </WaiterCardBox>
                </Box>
            )
        } else {
            return (
                <Box sx={{padding: "3% 0% 0% 8%", width: "90.9vw", height: "15.65vh"}}>
                    <WaiterCardBox />
                </Box>
            )
        }
    } else {
        return (
            <Box sx={{padding: "3% 0% 0% 8%", width: "90.9vw", height: "15.65vh"}}>
                <WaiterCardBox />
            </Box>
        )
    }
}

export default WaiterCardModule;