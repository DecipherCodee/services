import { useStore } from "./utils";

export const useIntro = ({ setField }) => {
  const { styles, OffContract, OnContract } = useStore({ setField });

  return (
    <main className={styles.intro}>
      <OffContract />
      or
      <OnContract />
    </main>
  );
};
