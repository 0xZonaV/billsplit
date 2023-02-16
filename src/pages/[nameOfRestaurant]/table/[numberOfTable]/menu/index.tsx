import {NextPage} from "next";
import {useSelector} from "react-redux";
import {selectMenu} from "@/store/menu/menu-selector";
import HeaderMenuModule from "@/components/Menu/Header/HeaderMenu.module";
import ItemCardsRender from "@/components/Menu/ItemCard/components/ItemCardsRender";

type MenuIndexPageProps = {
    nameOfRestaurant?: string | string[];
}

const MenuIndexPage: NextPage<MenuIndexPageProps> = ({nameOfRestaurant}) => {

    const menu = useSelector(selectMenu);

    return(
        <>
            <HeaderMenuModule nameOfRestaurant={nameOfRestaurant as string} />
            <ItemCardsRender menu={menu} />
        </>
    )
}

MenuIndexPage.getInitialProps = async ({query}): Promise<MenuIndexPageProps> => {
    const {nameOfRestaurant} = query;

    return {nameOfRestaurant};
}



export default MenuIndexPage;