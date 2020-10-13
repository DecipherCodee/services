import { useOnContract } from "..";
import { useFieldsetStore } from "../../../..";
import { useOnContractField } from "./field";
import styles from "./style.module.scss";

export const useStore = () => {
  const { useFieldset } = useFieldsetStore();

  return {
    styles,
    Fieldset: () =>
      useFieldset({ legend: "On-Contract", children: useOnContractField() }),
  };
};
export const useOnContractFieldStore = () => {
  return { useOnContract };
};
