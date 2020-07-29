export * from "..";

const title = "Maintenance";
const tip =
  "Instantly update your existing site while free from functional bugs.";

export const useMaintenanceStore = () => {
  return { title, tip };
};
