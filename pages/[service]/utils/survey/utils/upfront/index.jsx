import { useUpfrontStore } from "./utils";

export const useUpfront = ({ name = "upfront", children }) => {
  const { styles } = useUpfrontStore();

  return (
    <label className={styles.dropDown} htmlFor={name}>
      <select id={name} className={styles.dropDown}>
        <>
          <option value={name}>Upfront type</option>
          <option disabled>{}</option>
        </>
        {children || (
          <>
            <option value={9.99}>Static</option>
            <option value={199.99}>Dynamic</option>
          </>
        )}
      </select>
    </label>
  );
};
