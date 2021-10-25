import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {useEffect} from "react";

function MyApp({Component, pageProps}) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
