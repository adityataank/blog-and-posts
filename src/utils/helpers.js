import { twMerge } from "tailwind-merge";

export const cn = (...classNames) => {
  return twMerge(classNames);
};

export const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the previous timeout
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args); // Execute the function after the delay
    }, delay);
  };
};
