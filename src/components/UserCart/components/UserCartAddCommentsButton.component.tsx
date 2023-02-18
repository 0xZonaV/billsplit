import {Button} from "@mui/material";
import {FC} from "react";

const UserCartAddCommentsButton: FC<{ OpenPopupOnClick: () => void }> = ({ OpenPopupOnClick }) => {
    return(
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button sx={{
                background: "linear-gradient(89.74deg, #BADCFF 8.19%, #ACB4FF 120.64%)",
                borderRadius: "9px",
                fontFamily: 'Doloman Pavljenko',
                fontSize: "20px",
                lineHeight: "19px",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                width: "240px",
                height: "50px",
                marginTop: "4%",

                color: "#33394B",
            }}
                    onClick={OpenPopupOnClick}
            >
                Добавить примечания
            </Button>
        </div>
    )
}

export default UserCartAddCommentsButton;