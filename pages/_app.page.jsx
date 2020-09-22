import "./style.scss";
import { func, string, shape } from "prop-types";
import Head from "next/head";
import { useServicesStore } from "./utils";

export const useApp = ({ Component, pageProps }) => {
  const { setStyle, getTitle, Header, Footer } = useServicesStore();

  return (
    <main id="app" className={setStyle}>
      <>
        <Head id="head">
          <title>{getTitle}</title>
        </Head>
      </>
      <Header id="header" />
      <>
        <Component id="component" {...pageProps} />
      </>
      <Footer id="footer" />
    </main>
  );
};

useApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({ root: string }).isRequired,
};

export default useApp;
