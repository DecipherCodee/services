import { useStore } from "./utils";

export const useOnContract = () => {
  const { styles, Fieldset } = useStore();

  return (
    <label htmlFor="on-contract" className={styles.onContract}>
      <input id="on-contract" type="radio" value="on-contract" name="scheme" />

      <Fieldset />
    </label>
  );
};
