import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppDrawerNavigator from './AppDrawerNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
