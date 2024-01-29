import React, {useState, useContext, createContext} from 'react';

const alertsContext = createContext();

export const useAlertsContext = () => useContext(alertsContext);

export const AlertsProvider = ({children}) => {
  const [showAlertsBox, setShowAlertsBox] = useState(false);

  const toggleAlertsBox = () => {
    setShowAlertsBox(prevState => !prevState);
  };

  return (
    <alertsContext.Provider
      value={{showAlertsBox, setShowAlertsBox, toggleAlertsBox}}>
      {children}
    </alertsContext.Provider>
  );
};
