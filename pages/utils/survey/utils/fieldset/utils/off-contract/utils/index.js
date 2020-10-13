import { useSurveyStore } from "../../../..";
import { useResponsiveStore } from "../../../../../../../[service]/utils/responsive/utils";
import { useBack } from "../../back";
import styles from "./style.module.scss";

export const useOffContractStore = ({ setField }) => {
  const {
    useFieldsetStore,
    useCheckboxStore,
    useExtraPagesStore,
    useUpfrontStore,
  } = useSurveyStore();
  const { useBehaviour } = useResponsiveStore();
  const { useFieldset, useIntro, setSurveyField } = useFieldsetStore();
  const { useExtraPage } = useExtraPagesStore();
  const { useCheckbox } = useCheckboxStore();
  const { useUpfront } = useUpfrontStore();
  const Intro = () => useIntro({ setField });
  return {
    styles,
    ExtraPages: useExtraPage,
    Behaviour: () =>
      useFieldset({
        legend: "What kind of behaviour?",
        children: useBehaviour(),
      }),
    SEO: () =>
      useCheckbox({ name: "SEO", id: "off-contract-seo", value: 9.99 }),
    Upfront: useUpfront,
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
  };
};
