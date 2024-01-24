import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MyRequestsScreen from '../screens/MyRequestsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Item1Screen from './Item1';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const useDrawerNavigation = () => {
  const navigation = useNavigation();
  return React.useMemo(() => {
    return {
      ...navigation,
      openDrawer: () => navigation.dispatch(DrawerActions.openDrawer()),
      closeDrawer: () => navigation.dispatch(DrawerActions.closeDrawer()),
    };
  }, [navigation]);
};

// Function to generate tab options
const createTabOptions = (iconNameFocused, iconNameUnfocused, iconLibrary) => ({
  tabBarIcon: ({focused}) => (
    <TabIcon
      name={focused ? iconNameFocused : iconNameUnfocused}
      library={iconLibrary}
      color={focused ? '#f1f5f9' : '#f1f5f9'}
      size={focused ? 30 : 25}
    />
  ),
  tabBarInactiveTintColor: '#f1f5f9',
  tabBarActiveTintColor: '#f1f5f9',
  headerShown: false,
  tabBarInactiveBackgroundColor: '#2563eb', // Set your desired background color
  tabBarActiveBackgroundColor: '#2563eb', // Optionally, set a different color for active tabs
});

// Generic Icon Component
const TabIcon = ({name, library, color, size}) => {
  const IconComponent = library;
  return <IconComponent name={name} size={size} color={color} />;
};

const BottomTabs = () => {
  const navigation = useDrawerNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={createTabOptions('home', 'home-outline', Ionicons)}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={createTabOptions(
          'file-tray-full',
          'file-tray-full-outline',
          Ionicons,
        )}
        name="My Requests"
        component={MyRequestsScreen}
      />
      <Tab.Screen
        options={createTabOptions('person', 'person-outline', Ionicons)}
        name="My Account"
        component={MyAccountScreen}
      />
      <Tab.Screen
        options={createTabOptions('menu', 'menu-outline', Ionicons)}
        name="Menu"
        component={Item1Screen}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            // Open the drawer
            navigation.openDrawer();
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
