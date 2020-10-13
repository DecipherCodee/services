import { useStore } from "./utils";

export const useSEO = () => {
  const { styles } = useStore();

  return <main className={styles.seo} />;
};
