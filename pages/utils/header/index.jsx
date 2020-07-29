import Link from "next/link";
import { useHeaderStore } from "./utils";

export const useHeader = () => {
  const { title, getService } = useHeaderStore();

  return (
    <main id="header">
      <>
        <h1 className="title">{title}</h1>
      </>
      <Link as="" href="/">
        <p className="sub-title">
          <code>{getService}</code>
        </p>
      </Link>
    </main>
  );
};

export const Header = useHeader;
