const botEndpoint = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/`;

export const sendCallWaiterNotification = (userTGChatId: string, tableNumber: string, userName: string  ) => {
    const notificationText = `Стол%20${tableNumber}:%20вас%20просят%20подойти%20`;
    fetch(botEndpoint + `sendMessage?chat_id=${userTGChatId}&text=${notificationText}`);
};

export const sendNewOrderNotification = (userTGChatId: string, tableNumber: string, userName: string  ) => {
    const notificationText = `Стол%20${tableNumber}:%20добавлен%20новый%20заказ%20Пользователь:%20${userName}`;
    fetch(botEndpoint + `sendMessage?chat_id=${userTGChatId}&text=${notificationText}`);
};

export const sendCashPaymentMethodChosenNotification  = (userTGChatId: string, tableNumber: string, userName: string  ) => {
    const notificationText = `Стол%20${tableNumber}:%20выбрана%20оплата%20наличными%20Пользователь:%20${userName}`;
    fetch(botEndpoint + `sendMessage?chat_id=${userTGChatId}&text=${notificationText}`);
};

export const sendCardPaymentMethodChosenNotification  = (userTGChatId: string, tableNumber: string, userName: string  ) => {
    const notificationText = `Стол%20${tableNumber}:%20заказ%20оплачен%20картой%20Пользователь:%20${userName}`;
    fetch(botEndpoint + `sendMessage?chat_id=${userTGChatId}&text=${notificationText}`);
};