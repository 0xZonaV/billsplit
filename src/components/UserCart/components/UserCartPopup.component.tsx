import {
    UserCartCloseButtonStyle,
    UserCartPopupBox,
    UserCartPopupText, UserCartPopupTextAndCloseBox, UserCartPopupTextField,
    UserCartPopupTextFieldBox
} from "@/components/UserCart/styles/UserCartPopup.style";
import {Button} from "@mui/material";
import {FC} from "react";

const UserCartPopup: FC<{ ClosePopupOnClick: () => void }> = ({ClosePopupOnClick}) => {
    return(
        <UserCartPopupBox>
            <UserCartPopupTextAndCloseBox>
                <UserCartPopupText>
                    Примечания к заказу
                </UserCartPopupText>
                <UserCartCloseButtonStyle onClick={ClosePopupOnClick} />
            </UserCartPopupTextAndCloseBox>
            <UserCartPopupTextFieldBox>
                <UserCartPopupTextField id="commentText" name="commentsText" rows={400} cols={15} />
            </UserCartPopupTextFieldBox>
            <UserCartPopupTextAndCloseBox>
            <Button sx={{
                background: "linear-gradient(90.19deg, #71E853 -4.95%, #23B042 119.78%)",
                borderRadius: "9px",
                fontFamily: 'Doloman Pavljenko',
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "24px",
                lineHeight: "23px",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                color: "#EBEFF3",
                marginTop: "9%",
                width: "199px",
                height: "54px",
            }}>
                Отправить
            </Button>
            </UserCartPopupTextAndCloseBox>
        </UserCartPopupBox>
    )
}

export default UserCartPopup;