import {useDispatch, useSelector} from "react-redux";
import {NextPage} from "next";
import {AppGeneralProps} from "../../../../../@types";
import {selectWindow} from "@/store/finalizeWindow/finalize-selector";
import UserFinalBillTip from "@/components/UserFinalBill/components/UserFinalBillTip.component";
import UserFinalBillTipSummEnterComponent
    from "@/components/UserFinalBill/components/UserFinalBillTipSummEnter.component";
import UserFinalBillMainForm from "@/components/UserFinalBill/components/UserFinalBillMainForm.component";
import UserPaymentByCard from "@/components/UserFinalBillPay/components/UserPaymentByCard.component";
import UserPaymentMethodChoose from "@/components/UserFinalBillPay/components/UserPaymentMethodChoose.component";
import UserSuccessfulPaymentScreen from "@/components/UserFinalBillPay/components/UserSuccesfulPaymnetScreen.component";
import {useEffect} from "react";
import {setMainForm} from "@/store/finalizeWindow/finalize-action";

const FinalizeOrder:NextPage<AppGeneralProps> = ({nameOfRestaurant, numberOfTable}) => {

    const WindowToRender = useSelector(selectWindow);
    const dispatch = useDispatch();

    const {agreePopup, amountPopup, choosePaymentMethod, successfulPayment, cardPayment, mainForm} = WindowToRender;

    useEffect(
        () => {
            if (!agreePopup) {
                dispatch(setMainForm());
            }
        },
        []
    )

    switch (true) {
        case (agreePopup) :
            return <UserFinalBillTip />;

        case (amountPopup) :
            return <UserFinalBillTipSummEnterComponent />;

        case (mainForm) :
            return <UserFinalBillMainForm />;

        case (cardPayment) :
            return <UserPaymentByCard />;

        case (choosePaymentMethod) :
            return <UserPaymentMethodChoose />;

        case (successfulPayment) :
            return <UserSuccessfulPaymentScreen />;

        default:
            return (
                <>
                    Error
                </>
            )
    }

}

FinalizeOrder.getInitialProps = async ({query}): Promise<AppGeneralProps> => {
    const {numberOfTable, nameOfRestaurant} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default FinalizeOrder;