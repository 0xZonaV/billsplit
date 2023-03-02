import {
    HowToModuleBox,
} from "@/components/HowTo/style/index.style";
import {FC, useState} from "react";
import HowToPopupComponent from "@/components/HowTo/components/HowToPopup.component";

type HowToDataType = {
    title: string,
    text: string,
    id: number,
}
const HowToModule: FC<{ setIsHowToRendered: (isRendered: boolean) => void }> = ({ setIsHowToRendered }) => {



    const HowToData: HowToDataType[] = [
        {
            title: "Главный Экран",
            text: "На нем можно увидеть, кто находится с вами за одним столом, позвать официанта, перейти в меню и оплатить счет",
            id: 1,
        },
        {
            title: "Добавление товара в корзину",
            text: "Когда вы нажимаете на кнопку “В корзину”, позиция добавляется в ваш заказ. Чтобы посмотреть список покупок, нажмите на значок корзины в правом верхнем углу",
            id: 2,
        },
        {
            title: "Ваш заказ",
            text: "На этой странице можно увидеть все что вы заказали. Чтобы изменить количество позиций, нажмайте на кнопки + и -",
            id: 3,
        },
        {
            title: "Оплата счета",
            text: "После того, как вы оформили заказ, можно выбрать способ оплаты счета: наличными официанту или картой онлайн",
            id: 4,
        },
    ];

    const [howToDataToRender, setHowToDataToRender] = useState(1);

    const dataToRender = HowToData.find((element) => element.id === howToDataToRender);

    return(
        <HowToModuleBox>
            {dataToRender ?
                <HowToPopupComponent setIsHowToRendered={setIsHowToRendered} data={dataToRender} setData={setHowToDataToRender} />
                :
                <></>
            }
        </HowToModuleBox>
    )
}

export default HowToModule;