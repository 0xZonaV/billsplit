import {HeaderButtonBox, HeaderButtonStyle} from "@/components/Menu/Header/styles/HeaderButton.style";
import {FC} from "react";

const HeaderMenuButton:FC<{buttonText: string, setCategoryToRender: (categoryToRender: string) => void, categoryToRender: string}> = ({buttonText, setCategoryToRender, categoryToRender}) => {

    const onClick = () => {
        setCategoryToRender(categoryToRender);
    }

    return(
        <HeaderButtonBox item xs={4}>
            <HeaderButtonStyle onClick={onClick}>
                {buttonText}
            </HeaderButtonStyle>
        </HeaderButtonBox>
    )
}

export default HeaderMenuButton;