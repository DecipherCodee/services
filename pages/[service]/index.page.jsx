import { useStore } from "./utils";

export const useService = () => {
  const { Service } = useStore();

  return <Service />;
};

export default useService;
