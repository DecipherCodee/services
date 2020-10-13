import { useStore } from "./utils";

export const useOnContractField = () => {
  const { styles } = useStore();

  return (
    <main className={styles.field}>
      <i>Benefits</i>
      <>
        <ol>
          Responsive site
          <li>5 pages free</li>
          <li>Works on across all devices</li>
        </ol>
        <ol>
          Maintenance
          <li>Feature changes</li>
          <li>Enhancement e.g. font changes</li>
          <li>bug fixes</li>
          <li>Web tests</li>
        </ol>
        <ol>
          SEO
          <li>Search engine optimisation</li>
          <li>Website analysis</li>
        </ol>
      </>
    </main>
  );
};
