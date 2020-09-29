import { useStore } from "./utils";

export const useServices = () => {
  const { Services, styles } = useStore();

  return (
    <main className={styles.services}>
      <>
        <ul className={styles.list}>
          <Services />
        </ul>
      </>
    </main>
  );
};

export default useServices;
