import BackIcon from "../../../../../public/BackIcon.svg";
import {BackButtonEllipse, SearchIconContainer} from "@/components/Menu/Header/styles/CartIcon.styles";
import {useRouter} from "next/router";
import {FC} from "react";

const BackButtonComponent:FC<{ pushToUrl: string }> = ({pushToUrl}) => {
    const Router = useRouter();

    const RouteBackOnClick = () => {
        Router.push(pushToUrl);
    }

    return(
        <SearchIconContainer item xs={3}>
            <BackButtonEllipse onClick={RouteBackOnClick}>
                <BackIcon />
            </BackButtonEllipse>
        </SearchIconContainer>
    )
}

export default BackButtonComponent;