import { dirname } from "path";
import { fileURLToPath } from "url";

export const __dirname = dirname(fileURLToPath(import.meta.url));

/* ------------------------------------ - ----------------------------------- */

export const getRandomNumber = () => {
  const random = Math.floor(Math.random() * 50);
  return random;
};

export const getRandomDate = () => {
  const randomAge = Math.floor(Math.random() * (2000 - 1900 + 1)) + 1900;
  const randomDay = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  const randomMonth = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  const date = `${randomDay}/${randomMonth}/${randomAge}`;
  return date;
};
