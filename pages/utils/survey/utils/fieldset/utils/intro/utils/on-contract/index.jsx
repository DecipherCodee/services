import { useStore } from "./utils";
import styles from "./utils/style.module.scss";

export const useContract = (
  isChecked,
  checkOnContract,
  checkOffContract,
  Fieldset,
  setField
) => {
  return (
    <label className={styles.onContract} htmlFor="on-contract-intro">
      <input
        id="on-contract-intro"
        type="radio"
        value="on-contract"
        name="scheme"
        checked={isChecked}
        onChange={() => checkOnContract(null, checkOffContract, setField)}
      />
      <Fieldset />
    </label>
  );
};

export const useOnContract = () => {
  const { Field } = useStore();

  return <Field />;
};
