import {Box} from "@mui/system";
import {GoogleSignInButton, TableNumberIndexPageStyle} from "@/components/TablePage/TableNumberIndexPage.style";
import GoogleIcon from "../../../public/icons/googleIcon.svg";
import {checkUserSession, googleSignInStart, rest} from "@/store/user/user-action";
import {useDispatch} from "react-redux";
import {FC} from "react";

const RegistrationForm:FC<{ nameOfRestaurant: string, numberOfTable: string}> = ({ numberOfTable, nameOfRestaurant }) => {

    const dispatch = useDispatch();
    const rest: rest = {
        nameOfRestaurant: nameOfRestaurant as string,
        tableNum: numberOfTable as string
    };

    const logGoogleUser = async () => {
        dispatch(googleSignInStart(rest));
        dispatch(checkUserSession(rest));
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <TableNumberIndexPageStyle>
                Добро Пожаловать!
            </TableNumberIndexPageStyle>
            <GoogleSignInButton startIcon={<GoogleIcon />} onClick={logGoogleUser} variant="text">
                Войти с помощью Google
            </GoogleSignInButton>
        </Box>
    )
}

export default RegistrationForm;