import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
};

export default App;
