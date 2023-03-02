import {selectCurrentWaiter} from "@/store/waiter/waiter-selector";
import {useSelector} from "react-redux";
import {
    WaiterProfileBox, WaiterProfileImage, WaiterProfileImageAndTextBox, WaiterProfileInfoBox, WaiterProfileInfoText,
    WaiterProfilePageBox,
    WaiterProfileTitle
} from "@/components/WaiterPage/styles/WaiterProfile.style";
import {WaiterPageRenderType} from "../../../../@types";
import {FC} from "react";
import WaiterPageFooter from "@/components/WaiterPage/components/Footer.component";


type TableListProps = {
    waiterPageRender: WaiterPageRenderType,
    setWaiterPageRender: (newWaiterPageRender :WaiterPageRenderType) => void
}

const WaiterProfile: FC<TableListProps> = ({waiterPageRender, setWaiterPageRender}) => {
    const currentWaiter = useSelector(selectCurrentWaiter);

    const imageToDisplay = () => {
        if (currentWaiter) {
           return <WaiterProfileImage src={currentWaiter?.imgUrl} alt={currentWaiter?.firstName} width={100} height={100}   />
        }

        return <div style={{ backgroundColor: "#FFF", width: "100px", height: "100px" }} />
    }

    return(
        <WaiterProfileBox>
            <WaiterProfilePageBox>
                <WaiterProfileTitle>
                    Профиль сотрудника
                </WaiterProfileTitle>
                <WaiterProfileImageAndTextBox>
                    {imageToDisplay()}
                    <WaiterProfileInfoBox>
                       <WaiterProfileInfoText>
                           Имя: {currentWaiter?.firstName}
                       </WaiterProfileInfoText>
                        <WaiterProfileInfoText>
                            Фамилия: {currentWaiter?.lastName}
                        </WaiterProfileInfoText>
                        <WaiterProfileInfoText>
                            Должность: официант
                        </WaiterProfileInfoText>
                        <WaiterProfileInfoText>
                            График: {currentWaiter?.schedule}
                        </WaiterProfileInfoText>
                    </WaiterProfileInfoBox>

                </WaiterProfileImageAndTextBox>
            </WaiterProfilePageBox>
            <WaiterPageFooter waiterPageRender={waiterPageRender} setWaiterPageRender={setWaiterPageRender} />
        </WaiterProfileBox>
    )
}

export default WaiterProfile;