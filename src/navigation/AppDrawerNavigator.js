import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import Login from '../screens/Login';
const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        gestureEnabled: true,
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name="Login / Sign Up"
        component={Login}
        options={{headerShown: false}}
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
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false, drawerItemStyle: {display: 'none'}}}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
