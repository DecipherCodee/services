import { useEffect, useState } from "react";
import { useSurvey } from "..";
import { useServicesStore } from "../..";
import { useCheckboxStore } from "./checkbox/utils";
import { useExtraPagesStore } from "./extra-page/utils";
import { useFieldsetStore } from "./fieldset/utils";
import styles from "./style.module.scss";
import { useUpfrontStore } from "./upfront/utils";

const props = {
  name: "survey",
  pages: "pages",
  upfront: {
    name: "upfront",
    static: "static",
    dynamic: "dynamic",
  },
  intro: {
    name: "intro",
    isOffContract: "isOffContract",
    isOnContract: "onContract",
  },
  offContract: {
    name: "offContract",
    behaviour: {
      name: "behaviour",
      responsive: "responsive",
      nonresponsive: "nonresponsive",
    },
    seo: "seo",
  },
  onContract: {
    name: "onContract",
    seo: "seo",
    responsive: "responsive",
    maintenance: "maintenance",
  },
};
const actions = {
  setIntro: "setIntro",
  setOffContract: "setOffContract",
  setOnContract: "setOnContract",
  setUpfront: "setUpfront",
  setPages: "setPages",
};
const initialValue = {
  [props.intro.name]: {
    [props.intro.isOffContract]: false,
    [props.intro.isOnContract]: false,
  },
  [props.offContract.name]: {
    [props.offContract.behaviour.name]: {
      [props.offContract.behaviour.responsive]: 0.0,
      [props.offContract.behaviour.nonresponsive]: {
        value: 0.0,
        mobile: 0.0,
        tab: 0.0,
        desktop: 0.0,
      },
    },
    [props.offContract.seo]: 0.0,
  },
  [props.onContract.name]: {
    [props.onContract.seo]: 0.0,
    [props.onContract.responsive]: 0.0,
    [props.onContract.maintenance]: 0.0,
  },
  [props.upfront.name]: {
    [props.upfront.static]: 0.0,
    [props.upfront.dynamic]: 0.0,
  },
  [props.pages]: 5,
};
const initialDispatch = {
  [actions.setPages](survey = initialValue, { value }) {
    return {
      ...survey,
      [props.pages]: Number(value),
    };
  },
  [actions.setIntro](survey = initialValue, { isOffContract, isOnContract }) {
    return {
      ...survey,
      [props.intro.name]: {
        ...survey?.[props.intro.name],
        [props.intro.isOnContract]: isOnContract || false,
        [props.intro.isOffContract]: isOffContract || false,
      },
    };
  },
  [actions.setOffContract](survey = initialValue, { name, value }) {
    const newName = String(name).toLowerCase();
    return {
      ...survey,
      [props.onContract.name]: {},
      [props.offContract.name]: {
        ...survey?.[props.offContract.name],
        [newName]: value,
      },
    };
  },
  [actions.setOnContract](survey = initialValue, { name, value }) {
    const newName = String(name).toLowerCase();
    return {
      ...survey,
      [props.offContract.name]: {},
      [props.onContract.name]: {
        ...survey?.[props.onContract.name],
        [newName]: value,
      },
    };
  },
  [actions.setUpfront](survey = initialValue, { name, value }) {
    const newName = String(name).toLowerCase();

    return {
      ...survey,
      [props.upfront.name]: {
        [newName]: value,
      },
    };
  },
};

export const useStore = () => {
  const { useFieldset, useIntro } = useFieldsetStore();
  const [field, setField] = useState();
  const { useGStore: Store } = useServicesStore();

  useEffect(() => {
    Store({
      name: "survey",
      initialValue,
      initialDispatch,
    });
  }, [Store]);

  return {
    Fieldset() {
      return useFieldset({ legend: field?.legend, children: field?.children });
    },
    styles,
    field,
    setField,
    Intro() {
      return useIntro({ setField });
    },
  };
};
export const useSurveyStore = () => {
  return {
    Survey: useSurvey,
    useExtraPagesStore,
    useCheckboxStore,
    useFieldsetStore,
    useUpfrontStore,
  };
};
