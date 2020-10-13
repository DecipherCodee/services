import { useEffect } from "react";
import { useStore } from "./utils";

export const useSurvey = () => {
  const { styles, field, setField, Intro, Fieldset } = useStore();

  useEffect(() => {
    if (field) {
      return;
    }
    setField({
      legend: "How do you want to pay?",
      children: <Intro />,
    });
  }, [field, setField]);

  return (
    <form className={styles.survey}>
      <>
        <Fieldset />
      </>
      <button className={styles.submitButton} type="submit">
        Total cost
      </button>
    </form>
  );
};
