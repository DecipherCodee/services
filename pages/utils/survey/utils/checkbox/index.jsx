import { useStore } from "./utils";

export const useCheckbox = ({
  name,
  isChecked,
  id,
  value,
  disable = false,
}) => {
  const { styles, check, isThisCheck } = useStore({
    isChecked,
    name,
    value,
    id,
  });

  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={isThisCheck}
        onChange={check}
        disabled={disable}
      />
      <strong>{name}</strong>
    </label>
  );
};
