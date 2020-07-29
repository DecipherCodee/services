import { useServicesStore } from "../..";

export * from "..";

const title = process.env.NEXT_PUBLIC_DECIPHERCODE_NAME;

export const useHeaderStore = () => {
  const { getQuery } = useServicesStore();
  const { getName } = useServicesStore();

  return {
    title: getName({ service: getQuery, title, cap: true }),
    getService: getName({
      title: `${getQuery ? title : "services"}`,
    }),
  };
};
