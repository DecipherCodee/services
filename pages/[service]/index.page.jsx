import { useServiceStore } from "./utils";

export const useService = () => {
  const { getService } = useServiceStore();

  return <main id="service">{getService}</main>;
};

export default useService;
