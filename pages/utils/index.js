import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import { useServiceStores } from "../[service]/utils";
import { useHeaderStores } from "./header/utils";
import { useFooterStores } from "./footer/utils";
import { useApp } from "../_app.page";
import { useServices } from "../index.page";

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
  return [responsive, learn, seo, maintenance].map(
    ({ price, tip, title } = {}) => (
      <Link as={`${String(title).toLowerCase()}`} href="/[service]" key={title}>
        <li className={styles.card}>
          <>
            <h3>
              {title}
              &rarr;
            </h3>
            <p>
              {tip}
              {price && <code>{price}</code>}
            </p>
          </>
        </li>
      </Link>
    )
  );
}

export const useServicesStore = () => {
  const router = useRouter();
  const {
    useResponsiveStore,
    useLearnStore,
    useSEOStore,
    useMaintenanceStore,
  } = useServiceStores();
  const { Footer } = useFooterStores();
  const { Header } = useHeaderStores();

  return {
    Header,
    Footer,

    styles,
    getServices: getServices({
      responsive: useResponsiveStore(),
      learn: useLearnStore(),
      seo: useSEOStore(),
      maintenance: useMaintenanceStore(),
    }),
    getTitle: getName({
      service: getQuery({ router }),
      title: "DecipherCode",
      cap: true,
    }),
    setStyle: getStyles({ service: getQuery({ router }) }),
    getName,
    getQuery: getQuery({ router }),
  };
};
export const useServicesStores = () => {
  return { useApp, useServices };
};
