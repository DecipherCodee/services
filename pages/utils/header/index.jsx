import Link from "next/link";
import { useStore } from "./utils";

export const useHeader = () => {
  const { title, getService, styles } = useStore();

  return (
    <main className={styles.header}>
      <>
        <h1 className={styles.title}>{title}</h1>
      </>
      <Link as="" href="/">
        <p className={styles.subTitle}>
          <code>{getService}</code>
        </p>
      </Link>
    </main>
  );
};

export const Header = useHeader;
