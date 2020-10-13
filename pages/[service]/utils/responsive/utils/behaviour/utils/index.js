import { useState } from "react";
import { useServicesStore } from "../../../../../../utils";
import styles from "./style.module.scss";

export const useBehaviourStore = () => {
  const [isResponsive, setResponsive] = useState(false);
  const [isNotResponsive, setNotResponsive] = useState(false);
  const { useGStore } = useServicesStore();
  const dispatch = useGStore({ name: "survey" })[1];

  return {
    styles,
    isResponsive,
    isNotResponsive,
    setResponsive(value, event) {
      if (typeof value === "boolean") {
        setResponsive(value);
        return;
      }
      dispatch("survey", "setOffContract", {
        name: "behaviour",
        value: { responsive: Number(event.currentTarget.value) },
      });
      setNotResponsive(false);
      setResponsive((old) => !old);
    },
    setNotResponsive(value) {
      if (typeof value === "boolean") {
        setNotResponsive(value);
        return;
      }
      setResponsive(false);
      setNotResponsive((old) => !old);
    },
  };
};
