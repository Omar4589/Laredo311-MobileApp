import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStackNavigator/HomeStack';
import MyRequestsStack from '../MyRequestsStackNavigator.js/MyRequestsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import createTabOptions from '../../utils/createTabOptions';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import MyAccountStack from '../MyAccountStackNavigator/MyAccountStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={createTabOptions('home', 'home-outline', Ionicons)}
        name="Home"
        component={HomeStack}
      />

      <Tab.Screen
        options={createTabOptions(
          'file-tray-full',
          'file-tray-full-outline',
          Ionicons,
        )}
        name="My Requests"
        component={MyRequestsStack}
      />

      <Tab.Screen
        options={createTabOptions('person', 'person-outline', Ionicons)}
        name="My Account"
        component={MyAccountStack}
      />

      <Tab.Screen
        options={createTabOptions('menu-outline', 'menu-outline', Ionicons)}
        name="Menu"
        component={HomeStack} //setting this component has no effect here because we have prevent default below
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            // Open the drawer
            navigation.dispatch(DrawerActions.openDrawer());
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
