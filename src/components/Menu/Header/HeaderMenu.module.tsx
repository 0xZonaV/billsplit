import CartIcon from "@/components/Menu/Header/components/CartIcon.component";
import {FC} from "react";
import HeaderMenuRestTitle from "@/components/Menu/Header/components/HeaderMenuRestTitle.component";
import {HeaderMenuStyle} from "@/components/Menu/Header/styles/Module.style";
import {Grid} from "@mui/material";
import BackButtonComponent from "@/components/Menu/Header/components/BackButton.component";
import HeaderMenuButton from "@/components/Menu/Header/components/HeaderMenuButton.component";
import {useRouter} from "next/router";

const HeaderMenuModule: FC<{ setCategoryToRender: (categoryToRender: string) => void }> = ({ setCategoryToRender }) => {

    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;

    return(
        <HeaderMenuStyle>
            <Grid container sx={{ padding: "10% 5% 0% 5%" }}>
                <BackButtonComponent pushToUrl={`/${nameOfRestaurant}/table/${numberOfTable}`} />
                <HeaderMenuRestTitle nameOfRestaurant={nameOfRestaurant as string} />
                <CartIcon />
            </Grid>

            <Grid container spacing={2} sx={{ padding: "5% 3% 5% 3%" }}>
                <HeaderMenuButton setCategoryToRender={setCategoryToRender} categoryToRender={"salads"} buttonText={"Салаты"} />
                <HeaderMenuButton setCategoryToRender={setCategoryToRender} categoryToRender={"pizza"} buttonText={"Пицца"} />
                <HeaderMenuButton setCategoryToRender={setCategoryToRender} categoryToRender={"drinks"} buttonText={"Напитки"} />
            </Grid>
        </HeaderMenuStyle>
    )
}

export default HeaderMenuModule;