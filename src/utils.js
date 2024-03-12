import { useState } from "react";

export function useLocalState(key, initialValue) {
  const storedValue = window.localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : initialValue;
  const [state, setState] = useState(item);

  const updateState = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, setState];
}

export function setInLocalStorage(value) {
  window.localStorage.setItem(value, JSON.stringify(value));
}
