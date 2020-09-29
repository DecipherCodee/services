import { useStore } from "./utils";

export const useSurvey = () => {
  const { styles, Intro, OffContract, OnContract } = useStore();

  return (
    <form className={styles.survey}>
      <Intro />
      <OffContract />
      <OnContract />
    </form>
  );
};
