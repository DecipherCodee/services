import styles from "./style.module.scss";

const title = "SEO";
const tip = "Optimise your website for Google search and analysis.";

export const useSEOStore = () => {
  return { title, tip, styles };
};
