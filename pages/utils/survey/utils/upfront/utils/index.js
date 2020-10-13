import { useUpfront } from "..";
import { useServicesStore } from "../../../..";
import styles from "./style.module.scss";

export const useStore = () => {
  const { useGStore } = useServicesStore();
  const dispatch = useGStore({ name: "survey" })[1];

  return {
    onChange(event) {
      dispatch("survey", "setUpfront", {
        name: event?.target?.[event?.target?.selectedIndex]?.text,
        value: Number(event?.target?.value),
      });
    },
    styles,
  };
};
export const useUpfrontStore = () => {
  return { useUpfront };
};
