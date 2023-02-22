import {useRouter} from "next/router";
import {BackButtonEllipse, SearchIconContainer} from "@/components/Menu/Header/styles/CartIcon.styles";
import HomeIcon from "../../../../public/icons/HomeIcon.svg";

const HomeButtonComponent = () => {
    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;
    const RouteBackOnClick = () => {
        Router.push(`/${nameOfRestaurant}/table/${numberOfTable}/`);
    }

    return(
        <SearchIconContainer item xs={2}>
            <BackButtonEllipse onClick={RouteBackOnClick}>
                <HomeIcon />
            </BackButtonEllipse>
        </SearchIconContainer>
    )
}
export default HomeButtonComponent;
