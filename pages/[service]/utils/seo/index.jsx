import { useSEOStore } from "./utils";

export const useSEO = () => {
  const { styles } = useSEOStore();
  return (
    <label className={styles.seo} htmlFor="seo-upfront">
      <input type="checkbox" id="seo-upfront" value={9.99} />
      <strong>SEO</strong>
    </label>
  );
};
