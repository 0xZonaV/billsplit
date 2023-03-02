import {WaiterPageRenderType} from "../../../../@types";
import {FC} from "react";
import WaiterPageFooter from "@/components/WaiterPage/components/Footer.component";

type ProfileProps = {
    waiterPageRender: WaiterPageRenderType,
    setWaiterPageRender: (newWaiterPageRender :WaiterPageRenderType) => void
}

const WaiterNotificationsModule: FC<ProfileProps> = ({ setWaiterPageRender, waiterPageRender }) => {
    return(
        <>
            <WaiterPageFooter waiterPageRender={waiterPageRender} setWaiterPageRender={setWaiterPageRender} />
        </>
    )
}

export default WaiterNotificationsModule;