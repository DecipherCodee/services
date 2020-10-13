import { useBehaviourStore } from "./utils";

export const useBehaviour = () => {
  const {
    styles,
    isNotResponsive,
    setNotResponsive,
    isResponsive,
    setResponsive,
  } = useBehaviourStore();

  return (
    <main className={styles.behaviour}>
      <label className={styles.responsiveLabel} htmlFor="responsive">
        <fieldset className={styles.responsive}>
          <legend>Responsive</legend>
          <main>
            <input
              id="responsive"
              type="radio"
              name="responsiveness"
              value={49.99}
              checked={isResponsive}
              onChange={(event) => setResponsive(null, event)}
            />
            Benefits -works across mutiple devices
          </main>
        </fieldset>
      </label>

      <label className={styles.noResponsiveLabel} htmlFor="non-responsive">
        <fieldset className={styles.devices}>
          <legend>Non-responsive</legend>
          <div>
            <input
              id="non-responsive"
              type="radio"
              name="responsiveness"
              checked={isNotResponsive}
              onChange={(event) => setNotResponsive(null, event)}
            />

            {true && (
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
