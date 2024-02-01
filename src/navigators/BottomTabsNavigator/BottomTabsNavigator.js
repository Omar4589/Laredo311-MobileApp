import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import MyRequestsScreen from '../../screens/MyRequestsScreen/MyRequestsScreen';
import MyAccountScreen from '../../screens/MyAccountScreen/MyAccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAlertsContext} from '../../contexts/AlertsContext';
import createTabOptions from './createTabOptions';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {toggleAlertsBox} = useAlertsContext();
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={createTabOptions(
          'home',
          'home-outline',
          Ionicons,
          navigation,
          toggleAlertsBox,
        )}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={createTabOptions(
          'file-tray-full',
          'file-tray-full-outline',
          Ionicons,
          navigation,
          toggleAlertsBox,
        )}
        name="My Requests"
        component={MyRequestsScreen}
      />

      <Tab.Screen
        options={createTabOptions(
          'person',
          'person-outline',
          Ionicons,
          navigation,
          toggleAlertsBox,
        )}
        name="My Account"
        component={MyAccountScreen}
      />

      <Tab.Screen
        options={createTabOptions(
          'menu',
          'menu-outline',
          Ionicons,
          navigation,
          toggleAlertsBox,
        )}
        name="Menu"
        component={HomeScreen} //setting this component has no effect here because we have prevent default below
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
