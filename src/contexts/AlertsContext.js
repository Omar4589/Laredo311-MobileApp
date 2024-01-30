import React, {useState, useContext, createContext} from 'react';

const AlertsContext = createContext();

export const useAlertsContext = () => useContext(AlertsContext);

export const AlertsProvider = ({children}) => {
  const [showAlertsBox, setShowAlertsBox] = useState(false);

  const toggleAlertsBox = () => {
    setShowAlertsBox(prevState => !prevState);
  };

  return (
    <AlertsContext.Provider
      value={{showAlertsBox, setShowAlertsBox, toggleAlertsBox}}>
      {children}
    </AlertsContext.Provider>
  );
};
