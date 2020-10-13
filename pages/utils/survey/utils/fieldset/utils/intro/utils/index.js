import { useFieldsetStore } from "../..";
import { useOnContractStore } from "./on-contract/utils";
import { useOffContractStore } from "./off-contract/utils";
import styles from "./style.module.scss";
import { useServicesStore } from "../../../../../..";

const props = {
  name: "survey",
  legend: "legend",
  children: "children",
  isOnContract: "isOnContract",
  isOffContract: "isOffContract",
};
const actions = {
  setOnContract: "setOnContract",
  setOffContract: "setOffContract",
  setField: "setField",
};

export const useStore = ({ setField }) => {
  const {
    useFieldset,
    useOffContract: OffContract,
    useOnContract: OnContract,
  } = useFieldsetStore();
  const { useOffContract } = useOffContractStore();
  const { useOnContract } = useOnContractStore();
  const { useGStore: Store } = useServicesStore();
  const dispatch = Store({ name: "survey" })[1];

  return {
    styles,
    OffContract() {
      return (
        <main className={styles.contract}>
          {useFieldset({
            legend: "Off-Contract",
            children: useOffContract(),
            onClick: () => {
              dispatch("survey", "setIntro", { isOffContract: true });
              setField({
                legend: "Off-Contract",
                children: <OffContract setField={setField} />,
              });
            },
          })}
        </main>
      );
    },
    OnContract() {
      return (
        <main className={styles.contract}>
          {useFieldset({
            legend: "On-Contract",
            children: useOnContract(),
            onClick: () => {
              dispatch("survey", "setIntro", { isOnContract: true });
              setField({
                legend: "On-Contract",
                children: <OnContract setField={setField} />,
              });
            },
          })}
        </main>
      );
    },
  };
};
export const useIntroStore = () => {
  return {
    props,
    actions,
  };
};
