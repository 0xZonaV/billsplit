import CartIcon from "@/components/Menu/Header/components/CartIcon.component";
import {FC} from "react";
import HeaderMenuRestTitle from "@/components/Menu/Header/components/HeaderMenuRestTitle.component";
import {HeaderMenuStyle} from "@/components/Menu/Header/styles/Module.style";
import {Grid} from "@mui/material";
import SearchIconComponent from "@/components/Menu/Header/components/SearchIcon.component";
import HeaderMenuButton from "@/components/Menu/Header/components/HeaderMenuButton.component";

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