import React, {useState, useContext, createContext} from 'react';
import {LOGIN_USER} from './mutations';
import {useMutation} from '@apollo/client';
import Auth from './auth';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [login, {error}] = useMutation(LOGIN_USER);

  const loginFunc = async (email, password) => {
    console.log('check A');
    try {
      console.log('check B');
      const {data} = await login({
        variables: {email: email, password: password},
      });
      console.log('check C');

      if (data.login && data.login.token) {
        await Auth.login(data.login.token);
        setIsLoggedIn(true);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('----');
      console.log(e);
      console.log('----');
    }
  };

  const logoutFunc = async () => {
    try {
      console.log('trying to log out');
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
