import CartIcon from "@/components/Menu/Header/CartIcon.component";
import {FC} from "react";
import HeaderMenuRestTitle from "@/components/Menu/Header/HeaderMenuRestTitle.component";
import {HeaderMenuStyle} from "@/components/Menu/Header/styles/Module.style";
import {Grid} from "@mui/material";
import SearchIconComponent from "@/components/Menu/Header/SearchIcon.component";
import HeaderMenuButton from "@/components/Menu/Header/HeaderMenuButton.component";

const HeaderMenuModule: FC<{nameOfRestaurant: string}> = ({nameOfRestaurant}) => {
    return(
        <HeaderMenuStyle>
            <Grid container sx={{ padding: "10% 5% 0% 5%" }}>
                <CartIcon />
                <HeaderMenuRestTitle nameOfRestaurant={nameOfRestaurant} />
                <SearchIconComponent />
            </Grid>

            <Grid container spacing={2} sx={{ padding: "5% 3% 5% 3%" }}>
                <HeaderMenuButton buttonText={"Салаты"} />
                <HeaderMenuButton buttonText={"Пицца"} />
                <HeaderMenuButton buttonText={"Напитки"} />
            </Grid>
        </HeaderMenuStyle>
    )
}

export default HeaderMenuModule;