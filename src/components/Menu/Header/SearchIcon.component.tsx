import SearchIcon from "../../../../public/searchIcon.svg";
import {SearchIconContainer} from "@/components/Menu/Header/styles/CartIcon.styles";

const SearchIconComponent = () => {
    return(
        <SearchIconContainer item xs={3}>
            <SearchIcon />
        </SearchIconContainer>
    )
}

export default SearchIconComponent;