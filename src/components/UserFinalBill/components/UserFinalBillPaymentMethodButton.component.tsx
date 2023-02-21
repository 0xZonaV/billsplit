import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setChoosePayment} from "@/store/finalizeWindow/finalize-action";
import {FC} from "react";

const UserFinalBillPaymentMethodButton:FC<{ totalToPay: number, setTotalToPay: (totalToPay: number) => void }> = ({ totalToPay, setTotalToPay }) => {

    const dispatch = useDispatch()

    const openChoosePayment = () => {
        setTotalToPay(totalToPay);

        dispatch(setChoosePayment());
    }

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button sx={{
                background: "linear-gradient(90.57deg, #1DA04A 11.37%, #21AC44 92.16%)",
                borderRadius: "15px",
                fontFamily: 'Doloman Pavljenko',
                fontSize: "20px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                width: "264px",
                height: "62px",
                marginTop: "7%",

                color: "#EBEFF3",
            }}
                    onClick={openChoosePayment}
            >
                Выбрать способ оплаты
            </Button>
        </div>
    )
}

export default UserFinalBillPaymentMethodButton;