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

const WaiterCardModule = () => {

    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const onClick = () => {
        setIsButtonPressed(!isButtonPressed);
    }

    const waitersInfo = useSelector(selectWaitersData);
    const isWaitersLoading = useSelector(selectIsWaiterLoading);

    if (waitersInfo.length > 0) {

        const {firstName, imgUrl} = waitersInfo[0];

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
                        <CallWaiterButtonPressed onClick={onClick}>
                            &#10004;
                        </CallWaiterButtonPressed>
                    ) : (
                        <CallWaiterButton onClick={onClick}>
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
}

export default WaiterCardModule;