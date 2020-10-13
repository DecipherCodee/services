import { useStore } from "./utils";

export const useOnContract = ({ setField }) => {
  const {
    styles,
    SEO,
    Responsive,
    Maintenance,
    Back,
    Upfront,
    ExtraPage,
  } = useStore({
    setField,
  });

  return (
    <main className={styles.onContract}>
      <Back />
      <aside className={styles.pack}>
        <SEO />
        <Responsive />
        <Maintenance />
      </aside>
      <section className={styles.extra}>
        <ExtraPage />
        <Upfront />
      </section>
    </main>
  );
};
