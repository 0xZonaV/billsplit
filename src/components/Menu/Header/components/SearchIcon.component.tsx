import BackIcon from "../../../../../public/BackIcon.svg";
import {BackButtonEllipse, SearchIconContainer} from "@/components/Menu/Header/styles/CartIcon.styles";
import {useRouter} from "next/router";
import {FC} from "react";

const SearchIconComponent:FC = () => {
    const Router = useRouter();

    const {nameOfRestaurant, numberOfTable} = Router.query;

    const RouteBackOnClick = () => {
        Router.push(`/${nameOfRestaurant}/table/${numberOfTable}`)
    }

    return(
        <SearchIconContainer item xs={3}>
            <BackButtonEllipse onClick={RouteBackOnClick}>
                <BackIcon />
            </BackButtonEllipse>
        </SearchIconContainer>
    )
}

export default SearchIconComponent;