import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import AppProvider from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>Clerkie-App</title>
          <meta name="description" content="This is my portfolio" />
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover, width=device-width"
          ></meta>
          <meta
            property="og:site_name"
            content="Clerkie-App"
            data-rh="true"
          ></meta>
          <meta property="og:title" content="Clerkie-App" data-rh="true"></meta>

          <meta
            property="og:description"
            content="Clerkie App Assessment"
            data-rh="true"
          ></meta>
          <meta
            property="og:url"
            content="https://clerkie-app.com"
            data-rh="true"
          ></meta>
        </Head>

        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
