import { useFieldset } from "..";
import { useIntro } from "./intro";
import { useOffContract } from "./off-contract";
import { useOnContract } from "./on-contract";
import styles from "./style.module.scss";

export function setStore({ setField, setChildren, setLegend, content, name }) {
  setField((old) => !old);
  setChildren(content);
  setLegend(name);
}

export function setSurveyField({ setField, legend, children }) {
  setField({
    legend,
    children,
  });
}
export const useStore = () => {
  return {
    styles,
  };
};
export const useFieldsetStore = () => {
  return {
    setSurveyField,
    useIntro,
    useOnContract,
    useOffContract,
    useFieldset,
  };
};
