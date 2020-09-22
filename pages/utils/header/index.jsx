import Link from "next/link";
import { useHeaderStore } from "./utils";

export const useHeader = () => {
  const { title, getService, styles } = useHeaderStore();

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
