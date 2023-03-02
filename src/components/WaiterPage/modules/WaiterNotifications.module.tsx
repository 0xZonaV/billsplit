import {WaiterPageRenderType} from "../../../../@types";
import {FC} from "react";
import WaiterPageFooter from "@/components/WaiterPage/components/Footer.component";
import {
    WaiterTableListBox,
    WaiterTableListContentBox,
    WaiterTableListTitle
} from "@/components/WaiterPage/styles/WaiterTableList.style";
import {
    WaiterNotification,
    WaiterNotificationsBox,
    WaiterNotificationText, WaiterNotificationTime
} from "@/components/WaiterPage/styles/WaiterNotifications.style";

type ProfileProps = {
    waiterPageRender: WaiterPageRenderType,
    setWaiterPageRender: (newWaiterPageRender :WaiterPageRenderType) => void
}

const WaiterNotificationsModule: FC<ProfileProps> = ({ setWaiterPageRender, waiterPageRender }) => {
    return(
        <>
            <WaiterTableListBox>
                <WaiterTableListContentBox>
                    <WaiterTableListTitle>
                        Мои уведомления
                    </WaiterTableListTitle>

                    <WaiterNotificationsBox>
                        <WaiterNotification>
                            <WaiterNotificationText>
                                Стол A1:  добавлен новый заказ
                            </WaiterNotificationText>
                            <WaiterNotificationTime>
                                11:03
                            </WaiterNotificationTime>
                        </WaiterNotification>

                        <WaiterNotification>
                            <WaiterNotificationText>
                                Стол A2: выбрана оплата наличными
                            </WaiterNotificationText>
                            <WaiterNotificationTime>
                                11:01
                            </WaiterNotificationTime>
                        </WaiterNotification>

                        <WaiterNotification>
                            <WaiterNotificationText>
                                Стол B3: счет успешно оплачен
                            </WaiterNotificationText>
                            <WaiterNotificationTime>
                                10:56
                            </WaiterNotificationTime>
                        </WaiterNotification>

                        <WaiterNotification>
                            <WaiterNotificationText>
                                Стол B1: добавлено примечание к заказу
                            </WaiterNotificationText>
                            <WaiterNotificationTime>
                                10:49
                            </WaiterNotificationTime>
                        </WaiterNotification>

                        <WaiterNotification>
                            <WaiterNotificationText>
                                Стол A2: вас просят подойти
                            </WaiterNotificationText>
                            <WaiterNotificationTime>
                                10:35
                            </WaiterNotificationTime>
                        </WaiterNotification>

                        <WaiterNotification>
                            <WaiterNotificationText>
                                Стол B2: добавлен новый заказ
                            </WaiterNotificationText>
                            <WaiterNotificationTime>
                                10:30
                            </WaiterNotificationTime>
                        </WaiterNotification>
                    </WaiterNotificationsBox>

                </WaiterTableListContentBox>
            </WaiterTableListBox>
            <WaiterPageFooter waiterPageRender={waiterPageRender} setWaiterPageRender={setWaiterPageRender} />
        </>
    )
}

export default WaiterNotificationsModule;