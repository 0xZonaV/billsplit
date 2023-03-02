import {WaiterFooterButtonsBox, WaiterProfileFooter} from "@/components/WaiterPage/styles/WaiterProfile.style";
import {FC} from "react";
import {WaiterPageRenderType} from "../../../../@types";
import BellIcon from "../../../../public/icons/bellIcon.svg";
import ListIcon from "../../../../public/icons/listIcon.svg";
import ProfileIcon from "../../../../public/icons/profileIcon.svg";
import BellIconSelected from "../../../../public/icons/bellIconSelected.svg";
import ListIconSelected from "../../../../public/icons/listIconSelected.svg";
import ProfileIconSelected from "../../../../public/icons/profileIconSelected.svg";

type FooterProps = {
    waiterPageRender: WaiterPageRenderType,
    setWaiterPageRender: (newWaiterPageRender :WaiterPageRenderType) => void
}

const WaiterPageFooter: FC<FooterProps> = ({waiterPageRender, setWaiterPageRender}) => {

    const setListPage = () => {
        setWaiterPageRender({
            profile: false,
            notification: false,
            tableList: true
        });
    }

    const setProfilePage = () => {
        setWaiterPageRender({
            profile: true,
            notification: false,
            tableList: false
        });
    }

    const setNotificationPage = () => {
        setWaiterPageRender({
            profile: false,
            notification: true,
            tableList: false
        });
    }


    const iconsToRender = () => {
        if (waiterPageRender.profile) {
            return(
                <>
                    <ProfileIconSelected />
                    <ListIcon onClick={setListPage} />
                    <BellIcon onClick={setNotificationPage} />
                </>
            )
        }

        if (waiterPageRender.tableList) {
            return(
                <>
                    <ProfileIcon onClick={setProfilePage} />
                    <ListIconSelected />
                    <BellIcon onClick={setNotificationPage} />
                </>
            )
        }

        if (waiterPageRender.notification) {
            return(
                <>
                    <ProfileIcon onClick={setProfilePage} />
                    <ListIcon onClick={setListPage} />
                    <BellIconSelected />
                </>
            )
        }
    }

    return(
        <WaiterProfileFooter>
            <WaiterFooterButtonsBox>
            {iconsToRender()}
            </WaiterFooterButtonsBox>
        </WaiterProfileFooter>
    )
}

export default WaiterPageFooter;