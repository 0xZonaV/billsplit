import {Button} from "@mui/material";
import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import {googleSignInStart} from "@/store/user/user-action";
import {selectCurrentUser} from "@/store/user/user-selector";

type RestaurantIndexPageProps = {
    nameOfRestaurant?: string | string[]
}

const RestaurantIndexPage: NextPage<RestaurantIndexPageProps> = ({nameOfRestaurant}) => {

    const dispatch = useDispatch();

    const logGoogleUser = async () => {
        dispatch(googleSignInStart({nameOfRestaurant: nameOfRestaurant as string, tableNum: "1"}));
    }

    const user = useSelector(selectCurrentUser);

    const onClick2 = () => {
        // @ts-ignore
        console.log(user.userOrder.items);
    }


    return(
        <>
            Restaurant Index Page
            <Button onClick={logGoogleUser}>Google Sign In</Button>
            <Button onClick={onClick2}>Check User Order</Button>
        </>
    )
}

RestaurantIndexPage.getInitialProps =  async ({query}): Promise<RestaurantIndexPageProps> => {
    const {nameOfRestaurant} = query;

    return {nameOfRestaurant};
}

export default RestaurantIndexPage;