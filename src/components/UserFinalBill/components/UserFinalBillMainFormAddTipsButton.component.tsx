import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setAmountPopup} from "@/store/finalizeWindow/finalize-action";

const UserFinalBillMainFormAddTipsButton = () => {
    const dispatch = useDispatch();

    const openTipsPopup = () => {
        dispatch(setAmountPopup());
    }

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button sx={{
                background: "linear-gradient(89.95deg, #06373A -4.42%, #1F5F5B 102.21%)",
                borderRadius: "15px",
                fontFamily: 'Doloman Pavljenko',
                fontSize: "20px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                width: "264px",
                height: "62px",
                marginTop: "4%",

                color: "#EBEFF3",
            }}
                    onClick={openTipsPopup}
            >
                Добавить чаевые
            </Button>
        </div>
    )
}

export default UserFinalBillMainFormAddTipsButton;