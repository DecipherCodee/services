import { useSurvey } from "..";
import { useFieldsetStore } from "./fieldset/utils";
import styles from "./style.module.scss";

export const useStore = () => {
  const { useIntro, useOffContract, useFieldset } = useFieldsetStore();

  return {
    styles,
    Intro: () =>
      useFieldset({ legend: "How do want to pay?", children: useIntro() }),
    OffContract: () =>
      useFieldset({
        legend: "Off-Contract",
        children: useOffContract(),
      }),
    OnContract: () => useFieldset({ legend: "On-Contract" }),
  };
};
export const useSurveyStore = () => {
  return {
    Survey: useSurvey,
  };
};
