import {
    CallWaiterButton, CallWaiterButtonPressed,
    WaiterAvatarImage,
    WaiterCardBox,
    WaiterName
} from "@/components/TablePage/WaiterCard/style/Module.style";
import {Box} from "@mui/system";
import {TableNumberGuestsAvatarEllipse} from "@/components/TablePage/Body/style/TableNumberGuests.style";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchWaiterStart} from "@/store/menu/menu-action";
import {selectIsWaiterLoading, selectWaitersData} from "@/store/menu/menu-selector";

const WaiterCardModule = () => {

    const Router = useRouter();
    const dispatch = useDispatch();

    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const { nameOfRestaurant, numberOfTable } = Router.query;

    const onClick = () => {
        setIsButtonPressed(!isButtonPressed);
    }

    useEffect(
        () => {
            dispatch(fetchWaiterStart({nameOfRestaurant: nameOfRestaurant as string, tableNum: numberOfTable as string }));
        },
        []
    )

    const waitersInfo = useSelector(selectWaitersData);
    const isWaitersLoading = useSelector(selectIsWaiterLoading);

    if (waitersInfo) {

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
                            ✔
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