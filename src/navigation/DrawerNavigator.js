import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabs from './BottomTabsNavigator';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: 230, backgroundColor: '#f1f5f9'},
        drawerActiveTintColor: '#2563eb',
        drawerPosition: 'right',
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name="ReturnHome"
        component={BottomTabs}
        options={{
          headerShown: false,
          drawerItemStyle: {},
          drawerLabel: 'Home',
        }}
      />

      <Drawer.Screen
        name="About"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Contact Us"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Login / Sign Up"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
