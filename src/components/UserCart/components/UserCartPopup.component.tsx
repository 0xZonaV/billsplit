import {
    UserCartCloseButtonStyle,
    UserCartPopupBox,
    UserCartPopupText, UserCartPopupTextAndCloseBox, UserCartPopupTextField,
    UserCartPopupTextFieldBox
} from "@/components/UserCart/styles/UserCartPopup.style";
import {Button} from "@mui/material";
import {ChangeEvent, FC} from "react";

type UserCartPopupProps = {
    ClosePopupOnClick: () => void;
    onCommentInputChange: (event: ChangeEvent<HTMLTextAreaElement> ) => void;
    inputValue: string
}

const UserCartPopup: FC<UserCartPopupProps> = ({ClosePopupOnClick, onCommentInputChange, inputValue}) => {
    return(
        <UserCartPopupBox>
            <UserCartPopupTextAndCloseBox>
                <UserCartPopupText>
                    Примечания к заказу
                </UserCartPopupText>
                <UserCartCloseButtonStyle onClick={ClosePopupOnClick} />
            </UserCartPopupTextAndCloseBox>
            <UserCartPopupTextFieldBox>
                <UserCartPopupTextField
                    onChange={onCommentInputChange}
                    id="commentText"
                    name="commentsText"
                    rows={200}
                    cols={15}
                    value={inputValue}
                />
            </UserCartPopupTextFieldBox>
            <UserCartPopupTextAndCloseBox>
            <Button sx={{
                background: "linear-gradient(90.19deg, #1B9D4A -4.95%, #23B042 119.78%);",
                borderRadius: "15px",
                fontFamily: 'Doloman Pavljenko',
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "24px",
                lineHeight: "23px",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                color: "#EBEFF3",
                width: "199px",
                height: "54px",
            }}
                    onClick={ClosePopupOnClick}
            >
                Добавить
            </Button>
            </UserCartPopupTextAndCloseBox>
        </UserCartPopupBox>
    )
}

export default UserCartPopup;