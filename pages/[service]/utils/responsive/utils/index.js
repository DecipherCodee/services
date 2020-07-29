export * from "..";
export * from "./mobile";
export * from "./tablet";
export * from "./desktop";

const price = `£${20}/page`;
const title = "Responsive";
const tip = "Get a website that works on all devices.";

export const useResponsiveStore = () => {
  return { price, title, tip };
};
