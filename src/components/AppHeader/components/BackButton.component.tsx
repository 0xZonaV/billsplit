import BackIcon from "../../../../public/icons/BackIcon.svg";
import {BackButtonEllipse, SearchIconContainer} from "@/components/Menu/Header/styles/CartIcon.styles";
import {useRouter} from "next/router";

const BackButtonComponent = () => {
    const Router = useRouter();

    const RouteBackOnClick = () => {
        Router.back();
    }

    return(
        <SearchIconContainer item xs={2}>
            <BackButtonEllipse onClick={RouteBackOnClick}>
                <BackIcon />
            </BackButtonEllipse>
        </SearchIconContainer>
    )
}

export default BackButtonComponent;