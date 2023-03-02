import {WaiterPageRenderType} from "../../../../@types";
import {FC} from "react";
import WaiterPageFooter from "@/components/WaiterPage/components/Footer.component";
import {
    WaiterTableListBox,
    WaiterTableListContentBox,
    WaiterTableListRow,
    WaiterTableListTableDisabled,
    WaiterTableListTableEnabled,
    WaiterTableListTableList,
    WaiterTableListTitle
} from "@/components/WaiterPage/styles/WaiterTableList.style";
import {useRouter} from "next/router";

type TableListProps = {
    waiterPageRender: WaiterPageRenderType,
    setWaiterPageRender: (newWaiterPageRender :WaiterPageRenderType) => void
}

const WaiterTableListModule: FC<TableListProps> = ({ setWaiterPageRender, waiterPageRender }) => {

    const Router = useRouter();

    const { nameOfRestaurant } = Router.query;
    const pushToTable = (tableNum: string) => {
        Router.push(`/${nameOfRestaurant}/waiter/${tableNum}`);
    }

    const hardCodeClick = () => {
        pushToTable("1")
    }

    return(
        <>
            <WaiterTableListBox>
                <WaiterTableListContentBox>
                    <WaiterTableListTitle>
                        Выберите стол
                    </WaiterTableListTitle>

                    <WaiterTableListTableList>

                        <WaiterTableListRow>

                            <WaiterTableListTableEnabled onClick={hardCodeClick}>
                                А1
                            </WaiterTableListTableEnabled>

                            <WaiterTableListTableDisabled>
                                А1
                            </WaiterTableListTableDisabled>
                            <WaiterTableListTableDisabled>
                                А1
                            </WaiterTableListTableDisabled>

                        </WaiterTableListRow>

                        <WaiterTableListRow>

                            <WaiterTableListTableDisabled>
                                B1
                            </WaiterTableListTableDisabled>

                            <WaiterTableListTableDisabled>
                                B1
                            </WaiterTableListTableDisabled>
                            <WaiterTableListTableDisabled>
                                B1
                            </WaiterTableListTableDisabled>

                        </WaiterTableListRow>

                        <WaiterTableListRow>

                            <WaiterTableListTableDisabled>
                                C1
                            </WaiterTableListTableDisabled>

                            <WaiterTableListTableDisabled>
                                C1
                            </WaiterTableListTableDisabled>
                            <WaiterTableListTableDisabled>
                                C1
                            </WaiterTableListTableDisabled>

                        </WaiterTableListRow>

                        <WaiterTableListRow>

                            <WaiterTableListTableDisabled>
                                D1
                            </WaiterTableListTableDisabled>

                            <WaiterTableListTableDisabled>
                                D1
                            </WaiterTableListTableDisabled>
                            <WaiterTableListTableDisabled>
                                D1
                            </WaiterTableListTableDisabled>

                        </WaiterTableListRow>

                    </WaiterTableListTableList>

                </WaiterTableListContentBox>
            </WaiterTableListBox>
            <WaiterPageFooter waiterPageRender={waiterPageRender} setWaiterPageRender={setWaiterPageRender} />
        </>
    )
}

export default WaiterTableListModule;