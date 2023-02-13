import {NextPage} from "next";
import {Fragment} from "react";

export type AppGeneralProps = {
    numberOfTable?: string | string[];
    nameOfRestaurant?: string | string[];
}

const TableIndexPage: NextPage<AppGeneralProps> = ({numberOfTable, nameOfRestaurant}) => {
    return(
        <Fragment>
            {numberOfTable}
            {nameOfRestaurant}
        </Fragment>
    )
}




TableIndexPage.getInitialProps = async ({query}): Promise<AppGeneralProps> => {
    const {numberOfTable, nameOfRestaurant} = query;

    return {nameOfRestaurant, numberOfTable};
}

export default TableIndexPage;