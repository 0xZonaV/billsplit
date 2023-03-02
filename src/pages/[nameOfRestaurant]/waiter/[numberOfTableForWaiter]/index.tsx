import TableNumberTitle from "@/components/TablePage/Body/components/TableNumberTitle.component";
import {Box} from "@mui/system";
import {TableNumberGuestsTitle} from "@/components/TablePage/Body/style/TableNumberGuests.style";
import {NextPage} from "next";
import {useEffect, useState} from "react";
import WaiterTableAvatarsComponent from "@/components/WaiterTablePage/components/WaiterTableAvatars.component";
import {useDispatch, useSelector} from "react-redux";
import {selectTableUsers} from "@/store/user/user-selector";
import {setTableUsersStart} from "@/store/user/user-action";
import WaiterTableUserOrder from "@/components/WaiterTablePage/components/WaiterTableUserOrder.component";
import WaiterTableUserComments from "@/components/WaiterTablePage/components/WaiterTableUserComments.component";

type WaiterGeneralProps = {
    numberOfTableForWaiter?: string | string[];
    nameOfRestaurant?: string | string[];
}

const TableIndexPageWaiter: NextPage<WaiterGeneralProps> = ({numberOfTableForWaiter, nameOfRestaurant}) => {

    const dispatch = useDispatch();
    const tableUsers = useSelector(selectTableUsers);

    const selectedUserInitialState: () => string = () => {
        if (tableUsers) {
            if (tableUsers[0]) {
               return  tableUsers[0].id
            }
            return ""
        }

        return ""
    }

    const [selectedUser, setSelectedUser] = useState(selectedUserInitialState);

    const onAvatarClick = (id: string) => {
        setSelectedUser(id);
    };

    useEffect(
        () => {
            dispatch(setTableUsersStart({
                nameOfRestaurant: nameOfRestaurant as string,
                tableNum: numberOfTableForWaiter as string
            }));
        },
        []
    );




    return(
       <>
           <Box sx={{ padding: "15% 10% 0% 10%" }}>
                <TableNumberTitle tableNumber={numberOfTableForWaiter as string} />
                <Box sx={{ padding: "5% 3% 0 3%" }}>
                    <TableNumberGuestsTitle>
                        Гости
                    </TableNumberGuestsTitle>
                    <WaiterTableAvatarsComponent onAvatarClick={onAvatarClick} selectedUser={selectedUser} />
                    <WaiterTableUserOrder selectedUser={selectedUser} />
                    <WaiterTableUserComments selectedUser={selectedUser} />
                </Box>
            </Box>

       </>
    )
}



TableIndexPageWaiter.getInitialProps = async ({query}): Promise<WaiterGeneralProps> => {
    const {numberOfTableForWaiter, nameOfRestaurant} = query;

    return {numberOfTableForWaiter,nameOfRestaurant};
}


export default TableIndexPageWaiter