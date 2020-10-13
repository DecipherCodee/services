import { useFieldsetStore } from "../..";
import { useResponsiveStore } from "../../../../../../responsive/utils";
import { useSEO } from "../../../../../../seo";
import { useUpfront } from "../../../../upfront";
import styles from "./style.module.scss";

export const useOffContractStore = () => {
  const { useBehaviour } = useResponsiveStore();
  const { useFieldset } = useFieldsetStore();

  return {
    styles,
    Behaviour: () =>
      useFieldset({
        legend: "What kind of behaviour?",
        children: useBehaviour(),
      }),
    SEO: useSEO,
    Upfront: useUpfront,
  };
};
