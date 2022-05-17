import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import AppProvider from "../context";

function MyApp({ Component, pageProps, router }) {
  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>JSON-Parser-App</title>
          <meta name="description" content="This is my portfolio" />
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover, width=device-width"
          ></meta>
          <meta
            property="og:site_name"
            content="Json-Parser-App"
            data-rh="true"
          ></meta>
          <meta
            property="og:title"
            content="Json-Parser-App"
            data-rh="true"
          ></meta>

          <meta
            property="og:description"
            content="Json Parser App"
            data-rh="true"
          ></meta>
          <meta
            property="og:url"
            content="https://Json-parser-app.com"
            data-rh="true"
          ></meta>
        </Head>

        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
