import { useServicesStore } from "./utils";

export const useServices = () => {
  const { getServices, styles } = useServicesStore();

  return (
    <main className={styles.services}>
      <>
        <ul className={styles.list}>{getServices}</ul>
      </>
    </main>
  );
};

export default useServices;
