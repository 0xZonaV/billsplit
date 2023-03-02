import {
    HowToBottomBox,
    HowToCloseButton,
    HowToImage, HowToNextButton, HowToNextButtonBox,
    HowToProgress, HowToText, HowToTitle,
    HowToUpperBox,
    HowToVisibleBox
} from "@/components/HowTo/style/index.style";
import {Grid} from "@mui/material";
import HowToProgressIcon1 from "../../../../public/icons/HowToProgress/HowTo1Icon.svg";
import HowToProgressIcon2 from "../../../../public/icons/HowToProgress/HowTo2Icon.svg";
import HowToProgressIcon3 from "../../../../public/icons/HowToProgress/HowTo3Icon.svg";
import HowToProgressIcon4 from "../../../../public/icons/HowToProgress/HowTo4Icon.svg";

import HowToImage1 from "../../../../public/img/HowTo/HowTo1.svg";
import HowToImage2 from "../../../../public/img/HowTo/HowTo2.svg";
import HowToImage3 from "../../../../public/img/HowTo/HowTo3.svg";
import HowToImage4 from "../../../../public/img/HowTo/HowTo4.svg";
import {FC} from "react";

type HowToDataType = {
    title: string,
    text: string,
    id: number,
}

type PopupPropsType = {
    data: HowToDataType;
    setData: (id: number) => void;
    setIsHowToRendered: (isRendered: boolean) => void;
}

const HowToPopupComponent: FC<PopupPropsType> = ({data, setData, setIsHowToRendered}) => {
    const {title, id, text} = data

    const ImgToRender = () => {
        if (id === 1) {
            return {
                img: <HowToImage1 />,
                progress: <HowToProgressIcon1 />
            }
        }

        if (id === 2) {
            return {
                img: <HowToImage2 />,
                progress: <HowToProgressIcon2 />
            }
        }

        if (id === 3) {
            return {
                img: <HowToImage3 />,
                progress: <HowToProgressIcon3 />
            }
        }

        if (id === 4) {
            return {
                img: <HowToImage4 />,
                progress: <HowToProgressIcon4 />
            }
        }

        return {
            img: <></>,
            progress: <></>,
        }
    }


    const buttonTextToDisplay = () => {
        if (id === 4) {
            return "Понятно"
        }

        return "Далее"
    }

    const nextHowTo = () => {
        if (id !== 4) {
            setData(id+1);
        } else {
            setIsHowToRendered(false);
        }
    }

    const closeHowTo = () => {
        setIsHowToRendered(false);
    }

    return(
        <HowToVisibleBox>
            <HowToUpperBox>
                <Grid container>
                    <HowToCloseButton item xs={4} onClick={closeHowTo}>
                        Закрыть
                    </HowToCloseButton>
                    <HowToProgress item xs={4}>
                        {ImgToRender().progress}
                    </HowToProgress>
                </Grid>
                <HowToImage>
                    {ImgToRender().img}
                </HowToImage>
            </HowToUpperBox>
            <HowToBottomBox>
                <HowToTitle>
                    {title}
                </HowToTitle>
                <HowToText>
                    {text}
                </HowToText>

                <HowToNextButtonBox>
                    <HowToNextButton onClick={nextHowTo}>
                        {buttonTextToDisplay()}
                    </HowToNextButton>
                </HowToNextButtonBox>
            </HowToBottomBox>
        </HowToVisibleBox>
    )
}

export default HowToPopupComponent;