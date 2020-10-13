import { useStore } from "./utils";

export const useOffContract = () => {
  const { Field } = useStore();

  return <Field />;
};
