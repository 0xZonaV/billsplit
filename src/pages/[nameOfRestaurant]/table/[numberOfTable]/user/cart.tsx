import {NextPage} from "next";
import {AppGeneralProps} from "../../../../../../@types";
import UserCartModule from "@/components/UserCart";

const UserCart:NextPage<AppGeneralProps> = ({nameOfRestaurant, numberOfTable}) => {
    return(
        <>
            <UserCartModule />
        </>
    )
}

UserCart.getInitialProps = async ({query}): Promise<AppGeneralProps> => {
    const {numberOfTable, nameOfRestaurant} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default UserCart;