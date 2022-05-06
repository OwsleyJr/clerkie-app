import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [secondFullView, setSecondFullView] = useState(false);
  const [popupView, setPopupView] = useState(false);
  const [viewData, setViewData] = useState([]);
  const [viewType, setViewType] = useState(null);

  const screenSwitcher = () => {
    setSecondFullView(!secondFullView);
  };

  const popupSwitcher = () => {
    setPopupView(!popupView);
  };

  const getColor = () => {
    const color = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };

    const colorToHash = (r, g, b) =>
      "#" +
      [r, g, b]
        .map((x) => {
          const hash = x.toString(16);
          return hash.length === 1 ? "0" + hash : hash;
        })
        .join("");

    return colorToHash(color.r, color.g, color.b);
  };

  return (
    <AppContext.Provider
      value={{
        secondFullView,
        screenSwitcher,
        popupView,
        popupSwitcher,
        setViewData,
        viewData,
        setViewType,
        viewType,
        getColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
