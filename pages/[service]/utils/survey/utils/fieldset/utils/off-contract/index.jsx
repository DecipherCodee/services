import { useOffContractStore } from "./utils";

export const useOffContract = () => {
  const { styles, SEO, Upfront, Behaviour } = useOffContractStore();

  return (
    <main className={styles.offContract} key="off-contract">
      <Behaviour />
      <>
        <aside>
          <SEO />

          <label className={styles.extraPagesLabel} htmlFor="extra-pages">
            <strong>Extra pages</strong>
            <input
              id="extra-pages"
              type="number"
              min={1}
              max={20}
              defaultValue={0}
            />
          </label>
        </aside>
      </>
      <Upfront />
    </main>
  );
};
