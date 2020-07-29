import { Mobile, Tablet, Desktop } from "./utils";

const useResponsive = () => {
  return (
    <main id="responsive">
      <>
        <ul className="strategies">
          <h4>Content strategy</h4>

          <>
            <li className="strategy">HTML/CSS</li>
            <li className="strategy">ReactJS</li>
            <li className="strategy">Web Apps</li>
          </>
        </ul>
      </>
      <section className="platforms">
        <h4>Supported across multi-platform</h4>

        <>
          <Mobile />
          <Tablet />
          <Desktop />
        </>
      </section>
      <>
        <ul className="types">
          <h4>Types of responsive webpage</h4>

          <li className="type">Static page</li>
          <li className="type">Dynamic page</li>
        </ul>
      </>
    </main>
  );
};
export const Responsive = useResponsive;
