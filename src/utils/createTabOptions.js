import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import TabIcon from '../components/TabIconComponent/TabIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Function to generate tab options
const createTabOptions = (iconNameFocused, iconNameUnfocused, iconLibrary) => ({
  tabBarIcon: ({focused}) => (
    <TabIcon
      name={focused ? iconNameFocused : iconNameUnfocused}
      library={iconLibrary}
      color={focused ? '#f1f5f9' : '#f1f5f9'}
      size={iconNameFocused === 'menu-outline' ? 30 : 25}
    />
  ),
  tabBarInactiveTintColor: '#f1f5f9',
  tabBarActiveTintColor: '#f1f5f9',
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#2563eb',
  },
  tabBarInactiveBackgroundColor: '#2563eb', // Set your desired background color
  tabBarActiveBackgroundColor: '#2563eb', // Optionally, set a different color for active tabs
});

export default createTabOptions;
