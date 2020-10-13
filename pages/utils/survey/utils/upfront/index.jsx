import { useStore } from "./utils";

export const useUpfront = ({ name = "upfront", children }) => {
  const { styles, onChange } = useStore();

  return (
    <label className={styles.upfront} htmlFor={name}>
      <select id={name} onChange={onChange}>
        <>
          <option value={name}>Upfront type</option>
          <option disabled>{}</option>
        </>
        {children || (
          <>
            <option name="static" value={99.99}>
              Static
            </option>
            <option name="dynamic" value={199.99}>
              Dynamic
            </option>
          </>
        )}
      </select>
    </label>
  );
};
