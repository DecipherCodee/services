import { useServicesStore } from "../..";
import { Header } from "..";
import styles from "./style.module.scss";

const title = process.env.NEXT_PUBLIC_DECIPHERCODE_NAME;

export const useStore = () => {
  const { getQuery, getName } = useServicesStore();

  return {
    styles,
    title: getName({ service: getQuery, title, cap: true }),
    getService: getName({
      title: `${getQuery ? title : "services"}`,
    }),
  };
};
export const useHeaderStore = () => {
  return { Header };
};
