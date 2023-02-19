import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setChoosePayment} from "@/store/finalizeWindow/finalize-action";

const UserFinalBillPaymentMethodButton = () => {

    const dispatch = useDispatch()

    const openChoosePayment = () => {
        dispatch(setChoosePayment());
    }

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button sx={{
                background: "linear-gradient(91.49deg, #51CF49 -0.64%, #8CD531 124.74%)",
                borderRadius: "9px",
                fontFamily: 'Doloman Pavljenko',
                fontSize: "20px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                width: "240px",
                height: "50px",
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