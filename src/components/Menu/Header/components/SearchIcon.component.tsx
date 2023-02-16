import BackIcon from "../../../../../public/BackIcon.svg";
import {BackButtonEllipse, SearchIconContainer} from "@/components/Menu/Header/styles/CartIcon.styles";

const SearchIconComponent = () => {
    return(
        <SearchIconContainer item xs={3}>
            <BackButtonEllipse>
                <BackIcon />
            </BackButtonEllipse>
        </SearchIconContainer>
    )
}

export default SearchIconComponent;