import {Button} from "@mui/material";
import {FC} from "react";

const UserCartOrderButton:FC<{ sendOrder: () => void }> = ({sendOrder}) => {
    return(
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button sx={{
            background: "linear-gradient(91.49deg, #159947 -0.64%, #49B265 124.74%);",
            borderRadius: "15px",
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
                onClick={sendOrder}
        >
            Оформить заказ
        </Button>
        </div>
    )
}

export default UserCartOrderButton;