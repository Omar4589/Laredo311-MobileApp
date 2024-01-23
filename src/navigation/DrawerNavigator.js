import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Item1Screen from './Item1';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Item1Screen"
        component={Item1Screen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
