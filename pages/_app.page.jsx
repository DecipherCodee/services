import "./style.scss";
import { func, string, shape } from "prop-types";
import Head from "next/head";
import { Header, useServicesStore, Footer } from "./utils";

export const useApp = ({ Component, pageProps }) => {
  const { setStyle, getTitle } = useServicesStore();

  return (
    <main id="app" className={setStyle || undefined}>
      <>
        <Head>
          <title>{getTitle}</title>
        </Head>
      </>
      <>
        <Header />
      </>
      <Component {...pageProps} />
      <>
        <Footer />
      </>
    </main>
  );
};

useApp.propTypes = {
  Component: func.isRequired,
  pageProps: shape({ root: string }).isRequired,
};

export default useApp;
