import { useOnContract } from "..";
import { useFieldsetStore } from "../..";
import { useSurveyStore } from "../../../..";
import { useBack } from "../../back";
import styles from "./style.module.scss";

export const useStore = ({ setField }) => {
  const {
    useCheckboxStore,
    useUpfrontStore,
    useExtraPagesStore,
  } = useSurveyStore();
  const { useCheckbox } = useCheckboxStore();
  const { setSurveyField, useIntro } = useFieldsetStore();
  const Intro = () => useIntro({ setField });
  const { useUpfront } = useUpfrontStore();
  const { useExtraPage } = useExtraPagesStore();

  return {
    Upfront: useUpfront,
    ExtraPage: useExtraPage,
    Back() {
      return useBack({
        setSurveyField() {
          setSurveyField({
            legend: "How do you want to pay?",
            children: <Intro />,
            setField,
          });
        },
      });
    },
    styles,
    SEO: () =>
      useCheckbox({
        name: "SEO",
        isChecked: true,
        id: "on-contract-seo",
        disable: true,
      }),
    Responsive: () =>
      useCheckbox({
        name: "Responsive",
        isChecked: true,
        id: "on-contract-responsive",
        disable: true,
      }),
    Maintenance: () =>
      useCheckbox({
        name: "Maintenance",
        isChecked: true,
        id: "on-contract-maintenance",
        disable: true,
      }),
  };
};
export const useOnContractStore = () => {
  return { useOnContract };
};
