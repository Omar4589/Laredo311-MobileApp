import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStackNavigator/HomeStack';
import MyRequestsStack from '../MyRequestsStackNavigator.js/MyRequestsStack';
import MyAccountScreen from '../../screens/MyAccountScreen/MyAccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAlertsContext} from '../../contexts/AlertsContext';
import createTabOptions from './createTabOptions';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useHeaderVisibility} from '../../contexts/HeaderVisibilityContext';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {toggleAlertsBox} = useAlertsContext();
  const navigation = useNavigation();
  const {headerVisible} = useHeaderVisibility();

  //   // Inside each screen component
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: headerVisible,
  //   });
  // }, [headerVisible, navigation]);

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
        component={MyAccountScreen}
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
