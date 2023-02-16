import {HeaderButtonBox, HeaderButtonStyle} from "@/components/Menu/Header/styles/HeaderButton.style";
import {FC} from "react";

const HeaderMenuButton:FC<{buttonText: string}> = ({buttonText}) => {
    return(
        <HeaderButtonBox item xs={4}>
            <HeaderButtonStyle>
                {buttonText}
            </HeaderButtonStyle>
        </HeaderButtonBox>
    )
}

export default HeaderMenuButton;