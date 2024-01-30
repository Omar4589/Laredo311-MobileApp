import React, {useState, useContext, createContext} from 'react';
import {useMutation} from '@apollo/client';
import {LOGIN_USER} from '../utils/mutations';
import Auth from '../utils/auth';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [login, {error}] = useMutation(LOGIN_USER);

  const loginFunc = async (email, password) => {
    try {
      const {data} = await login({
        variables: {email: email, password: password},
      });

      if (data.login && data.login.token) {
        await Auth.login(data.login.token);
        setIsLoggedIn(true);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logoutFunc = async () => {
    try {
      await Auth.logout();
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{isLoggedIn, setIsLoggedIn, loginFunc, error, logoutFunc}}>
      {children}
    </AuthContext.Provider>
  );
};
