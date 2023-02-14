import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {persistor, wrapper} from "@/store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {FC} from "react";
import HeadComponent from "@/components/Head/Head.component";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;



    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                    <HeadComponent />
                    <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
};

export default MyApp;
