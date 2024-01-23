import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs'; // Your Bottom Tabs Navigator
import DrawerNavigator from './DrawerNavigator'; // Separate Drawer Navigator

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="BottomTabs" component={BottomTabs} />
      <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
