import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./style.module.scss";
import { useServiceStore } from "../[service]/utils";
import { useHeaderStore } from "./header/utils";
import { useFooterStore } from "./footer/utils";
import { useApp } from "../_app.page";
import { useServices } from "../index.page";
import { Service } from "./service";

export function capitalize({ text, cap }) {
  if (typeof text !== "string" || !cap || text.toLowerCase() === "seo") {
    return text?.toLowerCase() === "seo" ? "SEO" : text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}
export function getName({ service, title, cap }) {
  return !service ? title : capitalize({ text: service, cap });
}
export function getStyles({ service }) {
  return `${service ? styles.isService : styles.isHome}`;
}
export function getQuery({ router } = {}) {
  const { query: { service } = {} } = router !== null && router;
  return service;
}

export function getServices({ responsive, learn, seo, maintenance }) {
  return [
    responsive,
    learn,
    seo,
    maintenance,
  ].map(({ price, tip, title } = {}) => (
    <Service price={price} tip={tip} title={title} key={title} />
  ));
}
export function setTitle({ router }) {
  return (
    <Head id="head">
      <title>
        {getName({
          service: getQuery({ router }),
          title: "DecipherCode",
          cap: true,
        })}
      </title>
    </Head>
  );
}

export const useStore = () => {
  const router = useRouter();
  const {
    useResponsiveStore,
    useLearnStore,
    useSEOStore,
    useMaintenanceStore,
  } = useServiceStore();
  const { Footer } = useFooterStore();
  const { Header } = useHeaderStore();

  return {
    Header,
    Footer,
    styles,
    Services: () =>
      getServices({
        responsive: useResponsiveStore(),
        learn: useLearnStore(),
        seo: useSEOStore(),
        maintenance: useMaintenanceStore(),
      }),
    Head: () => setTitle({ router }),
    setStyle: getStyles({ service: getQuery({ router }) }),
    getName,
    getQuery: getQuery({ router }),
  };
};
export const useServicesStore = () => {
  const router = useRouter();

  return { getName, getQuery: getQuery({ router }), useApp, useServices };
};
