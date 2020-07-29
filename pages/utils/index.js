import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/_.module.scss";
import {
  useResponsiveStore,
  useLearnStore,
  useSEOStore,
  useMaintenanceStore,
} from "../[service]/utils";

export * from "./header/utils";
export * from "./footer/utils";
export * from "../index.page";
export * from "../_app.page";

function capitalize({ text, cap }) {
  if (typeof text !== "string" || !cap || text.toLowerCase() === "seo") {
    return text?.toLowerCase() === "seo" ? "SEO" : text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function getName({ service, title, cap }) {
  return !service ? title : capitalize({ text: service, cap });
}
function getStyles({ service }) {
  return `${service ? styles.isService : styles.isHome}`;
}
function getQuery({ router } = {}) {
  const { query: { service } = {} } = router !== null && router;
  return service;
}

export function getServices({ responsive, learn, seo, maintenance }) {
  return [responsive, learn, seo, maintenance].map(
    ({ price, tip, title } = {}) => (
      <Link as={`${String(title).toLowerCase()}`} href="/[service]" key={title}>
        <li className="card">
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

  return {
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
