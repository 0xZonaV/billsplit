import {NextPage} from "next";
import {useSelector} from "react-redux";
import {selectIsMenuLoading, selectMenu} from "@/store/menu/menu-selector";
import HeaderMenuModule from "@/components/Menu/Header/HeaderMenu.module";
import ItemCardsRender from "@/components/Menu/ItemCard/components/ItemCardsRender";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.component";
import {selectCurrentUser} from "@/store/user/user-selector";
import RegistrationForm from "@/components/RegistartionForm/RegistrationForm.component";
import {AppGeneralProps, CategoryRender} from "../../../../../../@types";
import {selectCartItems} from "@/store/cart/cart-selector";
import {useState} from "react";

const MenuIndexPage: NextPage<AppGeneralProps> = ({nameOfRestaurant, numberOfTable}) => {

    const menu = useSelector(selectMenu);
    const cart = useSelector(selectCartItems);
    const isMenuLoading = useSelector(selectIsMenuLoading);
    const currentUser = useSelector(selectCurrentUser);

    const CategoryInitialState: CategoryRender = {
        salads: true,
        pizza: false,
        drinks: false,
    }

    const [categoryRender, setCategoryRender] = useState(CategoryInitialState);

    const setCategoryToRender = (category: string) => {
        if (category === "salads") {
            setCategoryRender({ salads: true, pizza: false, drinks: false,})
        }
        if (category === "pizza") {
            setCategoryRender({ salads: false, pizza: true, drinks: false,})
        }
        if (category === "drinks") {
            setCategoryRender({ salads: false, pizza: false, drinks: true,})
        }
    }


    if (currentUser !== null) {
        if (!isMenuLoading) {
            return (
                <>
                    <HeaderMenuModule setCategoryToRender={setCategoryToRender} />
                    <ItemCardsRender menu={menu} cart={cart} categoryRender={categoryRender} />
                </>
            )
        } else {
            return <LoadingSpinner/>
        }
    } else {
        return <RegistrationForm nameOfRestaurant={nameOfRestaurant as string} numberOfTable={numberOfTable as string} />
    }
}

MenuIndexPage.getInitialProps = async ({query}): Promise<AppGeneralProps> => {
    const {nameOfRestaurant, numberOfTable} = query;

    return {nameOfRestaurant, numberOfTable};
}



export default MenuIndexPage;