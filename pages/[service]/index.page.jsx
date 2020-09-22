import { useServiceStore } from "./utils";

export const useService = () => {
  const { getService } = useServiceStore();

  return <>{getService}</>;
};

export default useService;
