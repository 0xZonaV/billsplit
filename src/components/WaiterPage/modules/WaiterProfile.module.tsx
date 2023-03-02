import {
    WaiterProfileBox,
    WaiterProfilePageBox,
    WaiterProfileTitle,
} from "@/components/WaiterPage/styles/WaiterProfile.style";
import {WaiterPageRenderType} from "../../../../@types";
import {FC} from "react";
import WaiterPageFooter from "@/components/WaiterPage/components/Footer.component";
import WaiterProfileInfoComponent from "@/components/WaiterPage/components/WaiterProfileInfo.component";
import WorkDaysTableComponent from "@/components/WaiterPage/components/WorkDaysTable.component";


type TableListProps = {
    waiterPageRender: WaiterPageRenderType,
    setWaiterPageRender: (newWaiterPageRender :WaiterPageRenderType) => void
}

const WaiterProfile: FC<TableListProps> = ({waiterPageRender, setWaiterPageRender}) => {
    return(
        <WaiterProfileBox>
            <WaiterProfilePageBox>
                <WaiterProfileTitle>
                    Профиль сотрудника
                </WaiterProfileTitle>
                <WaiterProfileInfoComponent />
                <WorkDaysTableComponent />
            </WaiterProfilePageBox>
            <WaiterPageFooter waiterPageRender={waiterPageRender} setWaiterPageRender={setWaiterPageRender} />
        </WaiterProfileBox>
    )
}

export default WaiterProfile;