import { useStore } from "./utils";

export const useFieldset = ({ children, legend, onClick }) => {
  const { styles } = useStore();

  return (
    <fieldset
      aria-hidden="true"
      onClick={onClick}
      key={legend}
      className={styles.fieldset}
    >
      <legend>{legend}</legend>

      {children}
    </fieldset>
  );
};
