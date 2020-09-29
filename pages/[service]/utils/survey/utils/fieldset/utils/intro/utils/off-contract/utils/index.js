import { useOffContract } from "..";
import { useFieldsetStore } from "../../../..";
import { useOffContractField } from "./field";
import styles from "./style.module.scss";

export const useStore = () => {
  const { useFieldset } = useFieldsetStore();

  return {
    styles,
    Fieldset: () =>
      useFieldset({ legend: "Off-Contract", children: useOffContractField() }),
  };
};
export const useOffContractStore = () => {
  return {
    useOffContract,
  };
};
