import "./style.scss";
import { useStore } from "./utils";

export const useApp = ({ Component, pageProps }) => {
  const { setStyle, Header, Footer, Head } = useStore();

  return (
    <main id="app" className={setStyle}>
      <>
        <Head id="head" />
      </>
      <Header id="header" />
      <>
        <Component id="component" {...pageProps} />
      </>
      <Footer id="footer" />
    </main>
  );
};

// useApp.propTypes = {
//   Component: func.isRequired,
//   pageProps: shape({ root: string }).isRequired,
// };

export default useApp;
