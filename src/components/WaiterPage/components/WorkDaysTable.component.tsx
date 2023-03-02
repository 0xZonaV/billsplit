import {
    WaiterWorkDaysBodyCell,
    WaiterWorkDaysDateCell,
    WaiterWorkDaysHeaderCell,
    WaiterWorkDaysTable, WaiterWorkDaysTableContainer
} from "@/components/WaiterPage/styles/WaiterProfile.style";
import {TableBody, TableHead, TableRow} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCurrentWaiter} from "@/store/waiter/waiter-selector";
import {JSX} from "@babel/types";

const WorkDaysTableComponent = () => {
    const currentWaiter = useSelector(selectCurrentWaiter);



    const renderWorkDays: () => JSX.Element[] | JSX.Element = () => {

        if (currentWaiter) {
            return currentWaiter.workDays.map((element) => {
                const {date, tips, rate, time} = element

                return (
                    <TableRow key={date}>
                        <WaiterWorkDaysDateCell sx={{padding: "5px"}}>
                            <p>{date}</p>
                            <p>{time}</p>
                        </WaiterWorkDaysDateCell>
                        <WaiterWorkDaysBodyCell>
                            {tips}
                        </WaiterWorkDaysBodyCell>
                        <WaiterWorkDaysBodyCell>
                            {rate}
                        </WaiterWorkDaysBodyCell>
                        <WaiterWorkDaysBodyCell>
                            {tips + rate}
                        </WaiterWorkDaysBodyCell>
                    </TableRow>
                )
            })
        }

        return <></>
    }

    return(
        <WaiterWorkDaysTableContainer>
            <WaiterWorkDaysTable>
                <TableHead>
                    <TableRow>
                        <WaiterWorkDaysHeaderCell sx={{ width: "150px"}}>
                            Смена
                        </WaiterWorkDaysHeaderCell>
                        <WaiterWorkDaysHeaderCell>
                            Чаевые
                        </WaiterWorkDaysHeaderCell>
                        <WaiterWorkDaysHeaderCell>
                            Ставка
                        </WaiterWorkDaysHeaderCell>
                        <WaiterWorkDaysHeaderCell sx={{ width: "58px" }}>
                            Итого
                        </WaiterWorkDaysHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderWorkDays()}
                </TableBody>
            </WaiterWorkDaysTable>
        </WaiterWorkDaysTableContainer>
    )
}


export default WorkDaysTableComponent;