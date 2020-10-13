import { useOffContractStore } from "./off-contract/utils";
import { useOnContractFieldStore } from "./on-contract/utils";
import styles from "./style.module.scss";

export const useStore = () => {
  const { useOffContract } = useOffContractStore();

  const { useOnContract } = useOnContractFieldStore();

  return {
    styles,
    OffContract: useOffContract,
    OnContract: useOnContract,
  };
};
