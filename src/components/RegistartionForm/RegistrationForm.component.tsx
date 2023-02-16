import {Box} from "@mui/system";
import {GoogleSignInButton, TableNumberIndexPageStyle} from "@/components/TablePage/TableNumberIndexPage.style";
import GoogleIcon from "../../../public/googleIcon.svg";
import {googleSignInStart} from "@/store/user/user-action";
import {useDispatch} from "react-redux";
import {FC} from "react";

const RegistrationForm:FC<{ nameOfRestaurant: string, numberOfTable: string}> = ({ numberOfTable, nameOfRestaurant }) => {

    const dispatch = useDispatch();

    const logGoogleUser = async () => {
        dispatch(googleSignInStart({
            nameOfRestaurant: nameOfRestaurant as string,
            tableNum: numberOfTable as string
        }));
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