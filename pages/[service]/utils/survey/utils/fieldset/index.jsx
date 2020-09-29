import { useStore } from "./utils";

export const useFieldset = ({ legend, children }) => {
  const { styles } = useStore();

  return (
    <fieldset key={legend} className={styles.fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};
