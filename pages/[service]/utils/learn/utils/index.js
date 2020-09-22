import { Learn } from "..";

const price = `£${7.99}/class`;
const title = "Learn";
const tip = "Learn web development using React.js and more!";

export const useLearnStore = () => {
  return { Learn, price, title, tip };
};
