import { useEffect, useState } from "react";

export const isFalsy = (value:any) => (value === 0 ? false : !value);

export const cleanObject = (object:any) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

// custom hook
export const useMount = (callback:() => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value:any, delay?:number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

// export const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func(...param);
//     }, delay);
//   };
// };
