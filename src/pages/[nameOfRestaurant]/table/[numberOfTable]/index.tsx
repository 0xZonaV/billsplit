
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {AppGeneralProps} from "../../../../../@types";
import {NextPage} from "next";
import TableNumberHeader from "@/components/TablePage/Header/TableNumberHeader.component";
import TableNumberPageBody from "@/components/TablePage/Body";
import RegistrationForm from "@/components/RegistartionForm/RegistrationForm.component";

const TableIndexPage: NextPage<AppGeneralProps> = ({numberOfTable, nameOfRestaurant}) => {


    // const logOut = () => {
    //     dispatch(signOutStart());
    // }

    const user = useSelector(selectCurrentUser);

    if (user == null) {
        return(
            <RegistrationForm nameOfRestaurant={nameOfRestaurant as string} numberOfTable={numberOfTable as string} />
        )
    } else {
        return (
            <>
                <TableNumberHeader restaurantName={nameOfRestaurant as string} />
                <TableNumberPageBody tableNumber={numberOfTable as string} user={user} />
            </>
        )
    }

}

TableIndexPage.getInitialProps =  async ({query}): Promise<AppGeneralProps> => {
    const {nameOfRestaurant, numberOfTable} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default TableIndexPage;