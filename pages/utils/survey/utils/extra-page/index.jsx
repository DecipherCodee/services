import { useStore } from "./utils";

export const useExtraPage = () => {
  const { styles, onChange } = useStore();

  return (
    <label className={styles.extraPages} htmlFor="extra-pages">
      <strong>Pages</strong>
      <input
        id="extra-pages"
        type="number"
        min={5}
        max={20}
        defaultValue={5}
        onChange={onChange}
      />
    </label>
  );
};
