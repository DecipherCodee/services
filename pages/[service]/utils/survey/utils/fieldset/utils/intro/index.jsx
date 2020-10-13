import { useStore } from "./utils";

export const useIntro = () => {
  const { styles, OffContract, OnContract } = useStore();

  return (
    <main className={styles.intro}>
      <OffContract />
      or
      <OnContract />
      {/* <label htmlFor="off-contract">
        <fieldset>
          <legend>Off-Contract</legend>
          <div>
            <input
              id="off-contract"
              type="radio"
              value="off-contract"
              name="scheme"
            />
            <i>
              Benefits
              <li>– buy packages and addons separately</li>
            </i>
          </div>
        </fieldset>
      </label>
      */}
      {/* or */}
      {/* <label htmlFor="on-contract">
        <fieldset>
          <legend>On-Contract</legend>
          <div>
            <input
              id="on-contract"
              type="radio"
              value="on-contract"
              name="scheme"
            />
            <i>Benefits</i>
            <>
              <ol>
                Responsive site
                <li>5 pages free</li>
                <li>Works on across all devices</li>
              </ol>
              <ol>
                Maintenance
                <li>Feature changes</li>
                <li>Enhancement e.g. font changes</li>
                <li>bug fixes</li>
                <li>Web tests</li>
              </ol>
              <ol>
                SEO
                <li>Search engine optimisation</li>
                <li>Website analysis</li>
              </ol>
            </>
          </div>
        </fieldset>
      </label>
    */}
    </main>
  );
};
