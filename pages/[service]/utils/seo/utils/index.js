import styles from "./style.module.scss";

const title = "SEO";
const tip = "Optimise your website for Google search and analysis.";
const price = 9.99;

export const useStore = () => {
  return { styles };
};
export const useSEOStore = () => {
  return { title, tip, price };
};
