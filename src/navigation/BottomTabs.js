import React from 'react';
import Home from '../screens/Home';
import MyRequests from '../screens/MyRequests';
import MyAccount from '../screens/MyAccount';
import Menu from '../screens/Menu';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

// Constants for icon size and color
const ICON_SIZE = 25;
const ICON_COLOR = '#000000';

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
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={createTabOptions('home', 'home-outline', Ionicons)}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={createTabOptions(
          'file-tray-full',
          'file-tray-full-outline',
          Ionicons,
        )}
        name="My Requests"
        component={MyRequests}
      />
      <Tab.Screen
        options={createTabOptions('person', 'person-outline', Ionicons)}
        name="My Account"
        component={MyAccount}
      />
      <Tab.Screen
        options={createTabOptions('menu', 'menu-outline', Ionicons)}
        name="Menu"
        component={Menu}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
