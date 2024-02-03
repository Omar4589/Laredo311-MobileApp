import React, {createContext, useContext, useState} from 'react';

// Create a context
const HeaderVisibilityContext = createContext();

// Hook to use the header visibility context
export const useHeaderVisibility = () => useContext(HeaderVisibilityContext);

// Context provider component
export const HeaderVisibilityProvider = ({children}) => {
  const [headerVisible, setHeaderVisible] = useState(true);
  console.log(headerVisible);

  return (
    <HeaderVisibilityContext.Provider value={{headerVisible, setHeaderVisible}}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
};
