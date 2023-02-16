
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {
    GoogleSignInButton,
    TablePageLoginTitleComponent
} from "@/components/TablePage/TablePageLoginTitle.component";
import {Button} from "@mui/material";
import {googleSignInStart, signOutStart} from "@/store/user/user-action";
import {Box} from "@mui/system";
import {AppGeneralProps} from "../../../../../@types";
import {NextPage} from "next";
import GoogleIcon from "../../../../../public/googleIcon.svg";

const TableIndexPage: NextPage<AppGeneralProps> = ({numberOfTable, nameOfRestaurant}) => {
    const dispatch = useDispatch();

    const user = useSelector(selectCurrentUser);

    const logOut = () => {
        dispatch(signOutStart());
    }

    const logGoogleUser = async () => {
        dispatch(googleSignInStart({
            nameOfRestaurant: nameOfRestaurant as string,
            tableNum: numberOfTable as string
        }));
    }




    if (user == null) {
        return(
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <TablePageLoginTitleComponent>
                    Добро Пожаловать!
                </TablePageLoginTitleComponent>
                <GoogleSignInButton startIcon={<GoogleIcon />} onClick={logGoogleUser} variant="text">
                        Войти с помощью Google
                </GoogleSignInButton>
            </Box>
        )
    } else {
        return (
            <>
                You Are Already Login In
                <Button onClick={logOut}>Log out</Button>
            </>
        )
    }

}

TableIndexPage.getInitialProps =  async ({query}): Promise<AppGeneralProps> => {
    const {nameOfRestaurant, numberOfTable} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default TableIndexPage;