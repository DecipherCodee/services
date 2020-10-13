import { useStore } from "./utils";

export const useOffContract = () => {
  const { styles, Fieldset } = useStore();

  return (
    <label className={styles.offContract} htmlFor="off-contract">
      <input
        id="off-contract"
        type="radio"
        value="off-contract"
        name="scheme"
      />
      <Fieldset />
    </label>
  );
};
