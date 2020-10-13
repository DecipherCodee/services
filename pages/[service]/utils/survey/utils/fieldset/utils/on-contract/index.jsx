import { useOnContractStore } from "./utils";

export const useOnContract = () => {
  const { styles } = useOnContractStore();

  return <main className={styles.onContract} />;
};
