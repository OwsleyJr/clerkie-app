import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [item, setItem] = useState(key);
  const [value, setValue] = useState(item || initialValue);

  useEffect(() => {
    setItem(window.localStorage.getItem(key));
    window.localStorage.setItem(key, value);
  }, [value, key, setItem]);
  return [value, setValue];
};

export default useLocalStorage;
