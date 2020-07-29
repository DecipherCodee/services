import dynamic from "next/dynamic";
import { useServicesStore } from "../../utils";

export * from "./responsive/utils";
export * from "./learn/utils";
export * from "./seo/utils";
export * from "./maintenance/utils";
export * from "../index.page";

const Responsive = dynamic(() =>
  import("./responsive/utils").then((mod) => mod.Responsive)
);
const services = {
  responsive: <Responsive />,
};

export function getService({ getQuery }) {
  return services[getQuery];
}

export const useServiceStore = () => {
  const { getQuery } = useServicesStore();

  return {
    getService: getService({ getQuery }),
  };
};
