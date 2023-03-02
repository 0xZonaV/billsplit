import {
    WaiterProfileImage,
    WaiterProfileImageAndTextBox,
    WaiterProfileInfoBox,
    WaiterProfileInfoText
} from "@/components/WaiterPage/styles/WaiterProfile.style";
import {useSelector} from "react-redux";
import {selectCurrentWaiter} from "@/store/waiter/waiter-selector";

const WaiterProfileInfoComponent = () => {

    const currentWaiter = useSelector(selectCurrentWaiter);

    const imageToDisplay = () => {
        if (currentWaiter) {
            return <WaiterProfileImage src={currentWaiter?.imgUrl} alt={currentWaiter?.firstName} width={100} height={100}   />
        }

        return <div style={{ backgroundColor: "#FFF", width: "100px", height: "100px" }} />
    }

    return(
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
    )
}

export default WaiterProfileInfoComponent;