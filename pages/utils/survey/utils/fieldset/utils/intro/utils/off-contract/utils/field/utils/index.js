import { useOffContractField } from "..";
import styles from "./style.module.scss";

export const useStore = () => {
  return { styles };
};

export const useOffContractFieldStore = () => {
  return {
    useOffContractField,
  };
};
