import { useOffContract } from "..";
import { useOffContractField } from "./field";

export const useStore = () => {
  return {
    Field: useOffContractField,
  };
};
export const useOffContractStore = () => {
  return {
    useOffContract,
  };
};
