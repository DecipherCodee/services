import { useBehaviourStore } from "./utils";

export const useBehaviour = () => {
  const { styles } = useBehaviourStore();

  return (
    <main className={styles.behaviour}>
      <label className={styles.responsiveLabel} htmlFor="responsive">
        <fieldset className={styles.responsive}>
          <legend>Responsive</legend>
          <div>
            <input
              id="responsive"
              type="radio"
              name="responsiveness"
              value={49.99}
            />
          </div>
        </fieldset>
      </label>

      <label className={styles.noResponsiveLabel} htmlFor="non-responsive">
        <fieldset className={styles.devices}>
          <legend>Non-responsive</legend>
          <div>
            <input id="non-responsive" type="radio" name="responsiveness" />
            {false && (
              <>
                <label htmlFor="mobile">
                  <input id="mobile" type="checkbox" value={15.99} />
                  Mobile
                </label>
                <label htmlFor="tablet">
                  <input id="tablet" type="checkbox" value={17.99} />
                  Tablet
                </label>
                <label htmlFor="desktop">
                  <input id="desktop" type="checkbox" value={19.99} />
                  Desktop
                </label>
              </>
            )}
          </div>
        </fieldset>
      </label>
    </main>
  );
};
