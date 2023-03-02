
import {useSelector} from "react-redux";
import {selectCurrentUser} from "@/store/user/user-selector";
import {AppGeneralProps} from "../../../../../@types";
import {NextPage} from "next";
import TableNumberHeader from "@/components/TablePage/Header/TableNumberHeader.component";
import TableNumberPageBody from "@/components/TablePage/Body";
import RegistrationForm from "@/components/RegistartionForm/RegistrationForm.component";
import WaiterCardModule from "@/components/TablePage/WaiterCard";
import ToMenuButton from "@/components/TablePage/Buttons/ToMenuButton.component";
import ToFinalizeButton from "@/components/TablePage/Buttons/ToFinalizeButton.component";
import HowToButton from "@/components/TablePage/Buttons/HowToButton.component";
import {useState} from "react";
import HowToModule from "@/components/HowTo";

const TableIndexPage: NextPage<AppGeneralProps> = ({numberOfTable, nameOfRestaurant}) => {

    const user = useSelector(selectCurrentUser);

    const [isHowToRender, setIsHowToRendered] = useState(false);

    // const logOut = () => {
    //     dispatch(signOutStart());
    // }

    if (user == null) {
        return(
            <RegistrationForm nameOfRestaurant={nameOfRestaurant as string} numberOfTable={numberOfTable as string} />
        )
    } else {

        if (isHowToRender) {
            return <HowToModule setIsHowToRendered={setIsHowToRendered} />
        } else {
            return (
                <>
                    <TableNumberHeader restaurantName={nameOfRestaurant as string}/>
                    <TableNumberPageBody tableNumber={numberOfTable as string}/>
                    <WaiterCardModule/>
                    <HowToButton setIsHowToRendered={setIsHowToRendered} />
                    <ToFinalizeButton/>
                    <ToMenuButton/>
                </>
            )
        }
    }

}

TableIndexPage.getInitialProps =  async ({query}): Promise<AppGeneralProps> => {
    const {nameOfRestaurant, numberOfTable} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default TableIndexPage;