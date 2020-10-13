import { useEffect, useState } from "react";
import { useCheckbox } from "..";
import { useServicesStore } from "../../../..";
import styles from "./style.module.scss";

export function changeInput({ checked }) {
  return !checked;
}
export const useStore = ({ isChecked, id, value, name }) => {
  const [isThisCheck, check] = useState(isChecked || false);
  const { useGStore: Store } = useServicesStore();
  const dispatch = Store({ name: "survey" })[1];

  useEffect(() => {
    if (!isThisCheck && String(id).match("off-contract")) {
      dispatch("survey", "setOffContract", { name, value: 0.0 });

      return;
    }
    if (String(id).match("off-contract")) {
      dispatch("survey", "setOffContract", { name, value });
    } else if (String(id).match("on-contract")) {
      dispatch("survey", "setOnContract", { name, value: "–" });
    }
  }, [isThisCheck, dispatch, id, value, name]);

  return {
    isThisCheck,
    styles,
    check() {
      check((old) => !old);
    },
  };
};

export const useCheckboxStore = () => {
  return { useCheckbox };
};
