import dynamic from "next/dynamic";
import { useServicesStore } from "../../utils";
import { useResponsiveStore } from "./responsive/utils";
import { useLearnStore } from "./learn/utils";
import { useSEOStore } from "./seo/utils";
import { useMaintenanceStore } from "./maintenance/utils";
import { useService } from "../index.page";

const Responsive = dynamic(() =>
  import("./responsive").then((mod) => mod.Responsive)
);
const services = {
  responsive: <Responsive />,
};

function getService({ getQuery }) {
  return services[getQuery];
}

export const useStore = () => {
  const { getQuery } = useServicesStore();

  return {
    Service: () => <>{getService({ getQuery })}</>,
  };
};
export const useServiceStore = () => {
  return {
    useService,
    useLearnStore,
    useSEOStore,
    useMaintenanceStore,
    useResponsiveStore,
    Responsive,
    getService,
  };
};
