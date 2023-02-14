import {NextPage} from "next";
import {useSelector} from "react-redux";
import {selectMenu} from "@/store/menu/menu-selector";
import {Typography} from "@mui/material";

type MenuIndexPageProps = {
    nameOfRestaurant?: string | string[];
}

const MenuIndexPage: NextPage<MenuIndexPageProps> = ({nameOfRestaurant}) => {

    const menu = useSelector(selectMenu);

    return(
        <>
            <Typography sx={{ fontFamily: "Buyan" }}>Меню Индекс Страница</Typography>
            <Typography sx={{ fontFamily: "Doloman Pavljenko" }}>{menu.map(element => element.name)}</Typography>
        </>
    )
}

MenuIndexPage.getInitialProps = async ({query}): Promise<MenuIndexPageProps> => {
    const {nameOfRestaurant} = query;

    return {nameOfRestaurant};
}



export default MenuIndexPage;