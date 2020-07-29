import { useServicesStore } from "./utils";

export const useHome = () => {
  const { getServices } = useServicesStore();

  return (
    <main id="home-page">
      <>
        <section className="services">
          <ul className="grid">{getServices}</ul>
        </section>
      </>
    </main>
  );
};

export default useHome;
