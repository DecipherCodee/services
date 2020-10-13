import { useFieldset } from "..";
import { useIntro } from "./intro";
import { useOffContract } from "./off-contract";
import styles from "./style.module.scss";

export const useStore = () => {
  return { styles };
};
export const useFieldsetStore = () => {
  return { useIntro, useOffContract, useFieldset };
};
