import {
    CallWaiterButton,
    WaiterAvatarImage,
    WaiterCardBox,
    WaiterName
} from "@/components/TablePage/WaiterCard/style/Module.style";
import {Box} from "@mui/system";
import {TableNumberGuestsAvatarEllipse} from "@/components/TablePage/Body/style/TableNumberGuests.style";

const WaiterCardModule = () => {
    return(
        <Box sx={{ padding: "3% 0% 0% 8%", width: "90.9vw", height: "15.65vh" }}>
            <WaiterCardBox>
                <TableNumberGuestsAvatarEllipse>
                    <WaiterAvatarImage src={"/img/waiter.jpg"} alt={"Мария"} width="61" height="61" />
                </TableNumberGuestsAvatarEllipse>
                <WaiterName>
                    Мария
                </WaiterName>
                <CallWaiterButton>
                    Позвать
                </CallWaiterButton>
            </WaiterCardBox>
        </Box>
    )
}

export default WaiterCardModule;