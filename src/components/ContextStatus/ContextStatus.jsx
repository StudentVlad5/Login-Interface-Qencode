import React, { createContext, useState } from 'react';
import { getFromStorage, saveToStorage } from 'services/localStorService';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    getFromStorage('auth')
      ? getFromStorage('auth')
      : null,
  );
  return (
    <StatusContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};
