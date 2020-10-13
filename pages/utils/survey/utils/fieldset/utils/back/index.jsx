import { useStore } from "./utils";

export const useBack = ({ setSurveyField }) => {
  const { styles } = useStore();

  return (
    <button className={styles.back} type="button" onClick={setSurveyField}>
      Back
    </button>
  );
};
