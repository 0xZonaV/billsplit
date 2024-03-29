import {
    OrderCompleteBox,
    OrderCompletedBackground,
    OrderCompleteText
} from "@/components/OrderCompleteScreen/OrderComplite.style";
import {Button} from "@mui/material";
import {FC} from "react";
import {useRouter} from "next/router";

const UserCartOrderSendWindow: FC = () => {

    const Router = useRouter();
    const { nameOfRestaurant, numberOfTable } = Router.query;
    const routeToFinalize = () => {
        Router.push(`/${nameOfRestaurant}/table/${numberOfTable}/finalize`);
    }

    const routeToMenu = () => {
        Router.push(`/${nameOfRestaurant}/table/${numberOfTable}/menu`);
    }


    return(
        <OrderCompletedBackground>
            <OrderCompleteBox>
            <OrderCompleteText>
                мы начали готовить ваш заказ
            </OrderCompleteText>
            <Button
                onClick={routeToFinalize}
                sx={{
                    background: "linear-gradient(89.74deg, #BADCFF 8.19%, #ACB4FF 120.64%)",
                    borderRadius: "15px",
                    width: "240px",
                    height: "50px",
                    fontFamily: 'Doloman Pavljenko',
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: "24px",
                    lineHeight: "23px",
                    textTransform: "none",

                    color: "#33394B",
                    marginTop: "50px"
                }}
            >
                Оплатить счет
            </Button>
                <Button
                    onClick={routeToMenu}
                    sx={{
                        background: "#D3F0E6",
                        borderRadius: "15px",
                        width: "240px",
                        height: "50px",
                        fontFamily: 'Doloman Pavljenko',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "24px",
                        lineHeight: "23px",
                        textTransform: "none",

                        color: "#33394B",
                        marginTop: "10px",
                        whiteSpace: "nowrap"
                    }}
                >
                    Добавить позиции в заказ
                </Button>
            </OrderCompleteBox>
        </OrderCompletedBackground>
    )
}

export default UserCartOrderSendWindow;