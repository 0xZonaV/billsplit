
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {
    GoogleSignInButton,
    TableNumberIndexPageStyle
} from "@/components/TablePage/TableNumberIndexPage.style";
import {googleSignInStart, signOutStart} from "@/store/user/user-action";
import {Box} from "@mui/system";
import {AppGeneralProps} from "../../../../../@types";
import {NextPage} from "next";
import GoogleIcon from "../../../../../public/googleIcon.svg";
import TableNumberHeader from "@/components/TablePage/Header/TableNumberHeader.component";
import TableNumberPageBody from "@/components/TablePage/Body";

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
                <TableNumberIndexPageStyle>
                    Добро Пожаловать!
                </TableNumberIndexPageStyle>
                <GoogleSignInButton startIcon={<GoogleIcon />} onClick={logGoogleUser} variant="text">
                        Войти с помощью Google
                </GoogleSignInButton>
            </Box>
        )
    } else {
        return (
            <>
                <TableNumberHeader restaurantName={nameOfRestaurant as string} />
                <TableNumberPageBody tableNumber={numberOfTable as string} user={user} />
            </>
        )
    }

}

TableIndexPage.getInitialProps =  async ({query}): Promise<AppGeneralProps> => {
    const {nameOfRestaurant, numberOfTable} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default TableIndexPage;