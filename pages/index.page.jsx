import { useServicesStore } from "./utils";

export const useServices = () => {
  const { getServices } = useServicesStore();

  return (
    <main id="services-page">
      <>
        <ul className="services">{getServices}</ul>
      </>
    </main>
  );
};

export default useServices;
