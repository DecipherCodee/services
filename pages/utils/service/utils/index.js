import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.scss";

export const useStore = () => {
  const [isFocus, setFocus] = useState(false);
  return {
    Link,
    isFocus,
    setFocus: () => setFocus((old) => !old),
    styles,
  };
};
