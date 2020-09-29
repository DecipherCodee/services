import { useStore } from "./utils";

export function useService({ title, tip, price }) {
  const { isFocus, setFocus, styles, Link } = useStore();

  return (
    <Link as={`${String(title).toLowerCase()}`} href="/[service]" key={title}>
      <button
        type="button"
        className={`${styles.service} ${
          isFocus ? styles.isFocus : styles.notFocus
        }`}
        onClick={setFocus}
      >
        <>
          <h3>
            {title}
            &rarr;
          </h3>
          <p>
            {tip}
            {price && <code>{price}</code>}
          </p>
        </>
      </button>
    </Link>
  );
}
export const Service = useService;
