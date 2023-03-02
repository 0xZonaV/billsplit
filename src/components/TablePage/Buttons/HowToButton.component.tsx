import {HowToButtonBox, HowToButtonStyle} from "@/components/TablePage/Buttons/HowToButton.style";
import LampIcon from "../../../../public/icons/lampIcon.svg";
import {FC} from "react";


const HowToButton:FC<{ setIsHowToRendered: (howTorendered: boolean) => void }> = ({ setIsHowToRendered }) => {

    const renderHowTo = () => {
        setIsHowToRendered(true);
    }

    return(
        <HowToButtonBox>
        <HowToButtonStyle onClick={renderHowTo} startIcon={<LampIcon />}>
            Как использовать BillSplit?
        </HowToButtonStyle>
        </HowToButtonBox>
    )
}

export default HowToButton;