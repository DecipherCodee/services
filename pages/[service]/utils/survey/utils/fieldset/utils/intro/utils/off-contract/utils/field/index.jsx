import { useStore } from "./utils";

export const useOffContractField = () => {
  const { styles } = useStore();

  return (
    <main className={styles.field}>
      
      <i>
        Benefits
        <li>– buy packages and addons separately</li>
      </i>
    </main>
  );
};
