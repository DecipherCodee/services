import { useOnContract } from "..";
import { useOnContractField } from "./field";

export const useStore = () => {
  return {
    Field: useOnContractField,
  };
};
export const useOnContractStore = () => {
  return { useOnContract };
};
