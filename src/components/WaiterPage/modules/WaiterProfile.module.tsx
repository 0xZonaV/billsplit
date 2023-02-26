import Image from "next/image";
import {selectCurrentWaiter} from "@/store/waiter/waiter-selector";
import {useSelector} from "react-redux";

const WaiterProfile = () => {
    const currentWaiter = useSelector(selectCurrentWaiter);

    const imageToDisplay = () => {
        if (currentWaiter) {
           return <Image src={currentWaiter?.imgUrl} alt={currentWaiter?.firstName} width={100} height={100}   />
        }

        return <div style={{ backgroundColor: "#FFF", width: "100px", height: "100px" }} />
    }

    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "354px", maxWidth: "354px", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Профиль сотрудника</h2>
                <div style={{ width: "319px", maxWidth: "319px", display: "flex", flexDirection: "row" }}>
                    {imageToDisplay()}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        Имя: {currentWaiter?.firstName}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WaiterProfile;