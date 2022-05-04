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

  console.log("POPUP VIEW", popupView);
  console.log("SECONDFULLVIEW", secondFullView);

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
