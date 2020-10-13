import { useSurveyStore } from "../../../../utils/survey/utils";
import { useBehaviour } from "./behaviour";
import styles from "./style.module.scss";

const price = `£${20}/page`;
const title = "Responsive";
const tip = "Get a website that works on all devices.";

export const useResponsiveStore = () => {
  const { Survey } = useSurveyStore();

  return { styles, price, title, tip, Survey, useBehaviour };
};
