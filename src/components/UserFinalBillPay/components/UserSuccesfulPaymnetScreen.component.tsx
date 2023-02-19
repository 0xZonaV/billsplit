import {
    OrderCompleteBox,
    OrderCompletedBackground,
    OrderCompleteText, SeeYouLaterText
} from "@/components/OrderCompleteScreen/OrderComplite.style";

const UserSuccessfulPaymentScreen = () => {
    return(
        <OrderCompletedBackground>
            <OrderCompleteBox>
                <OrderCompleteText style={{ marginTop: "30%", marginBottom: "10%" }}>
                    Спасибо за заказ
                </OrderCompleteText>
                <SeeYouLaterText>
                    Будем рады видеть вас снова!
                </SeeYouLaterText>
            </OrderCompleteBox>
        </OrderCompletedBackground>
    )
}

export default UserSuccessfulPaymentScreen;