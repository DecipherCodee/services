import { useOffContractStore } from "./utils";

export const useOffContract = ({ setField }) => {
  const {
    styles,
    SEO,
    Upfront,
    Behaviour,
    ExtraPages,
    Back,
  } = useOffContractStore({
    setField,
  });

  return (
    <main className={styles.offContract} key="off-contract">
      <Back />
      <Behaviour />
      <>
        <aside>
          <SEO />
          <ExtraPages />
        </aside>
      </>
      <Upfront />
    </main>
  );
};
