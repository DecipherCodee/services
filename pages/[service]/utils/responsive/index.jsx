import { useResponsiveStore } from "./utils";

export const useResponsive = () => {
  const { styles, Survey } = useResponsiveStore();

  return (
    <main className={styles.responsive}>
      <>
        <ul className={styles.strategies}>
          <h4>Content strategy</h4>
          <>
            <li>HTML/CSS</li>
            <li>ReactJS</li>
            <li>Web Apps</li>
          </>
        </ul>
      </>
      <section className={styles.platforms}>
        <h4>Supported across multi-platform</h4>
      </section>
      <>
        <ul className={styles.types}>
          <h4>Types of responsive webpage</h4>

          <li>Static page</li>
          <li>Dynamic page</li>
        </ul>
      </>
      <Survey />
    </main>
  );
};

export const Responsive = useResponsive;
