import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clerkie-App</title>
        <meta name="description" content="This is my portfolio" />
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
    </>
  );
}

export default MyApp;
