import { useExtraPage } from "..";
import { useServicesStore } from "../../../..";
import styles from "./style.module.scss";

export const useStore = () => {
  const { useGStore } = useServicesStore();
  const dispatch = useGStore({ name: "survey" })[1];

  return {
    onChange(event) {
      dispatch("survey", "setPages", {
        value: event?.target?.value,
      });
    },
    styles,
  };
};
export const useExtraPagesStore = () => {
  return { useExtraPage };
};
