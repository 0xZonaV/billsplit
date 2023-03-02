import {WaiterPageRenderType} from "../../../../@types";
import {FC} from "react";
import WaiterPageFooter from "@/components/WaiterPage/components/Footer.component";

type TableListProps = {
    waiterPageRender: WaiterPageRenderType,
    setWaiterPageRender: (newWaiterPageRender :WaiterPageRenderType) => void
}

const WaiterTableListModule: FC<TableListProps> = ({ setWaiterPageRender, waiterPageRender }) => {
    return(
        <>
            <WaiterPageFooter waiterPageRender={waiterPageRender} setWaiterPageRender={setWaiterPageRender} />
        </>
    )
}

export default WaiterTableListModule;