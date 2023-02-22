import {useRouter} from "next/router";
import {UserCartHeaderBox} from "@/components/UserCart/styles/UserCartHeader.styles";
import BackButtonComponent from "@/components/Menu/Header/components/BackButton.component";
import {MenuRestaurantTitle} from "@/components/Menu/Header/styles/Module.style";

const UserCartHeader = () => {
    const Router = useRouter();


    return(
        <UserCartHeaderBox
            container
        >
            <BackButtonComponent />
            <MenuRestaurantTitle xs={7} item>
                Ваш заказ
            </MenuRestaurantTitle>
        </UserCartHeaderBox>
    )
}

export default UserCartHeader;