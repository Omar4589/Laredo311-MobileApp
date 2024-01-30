import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import TabIcon from '../../components/TabIconComponent/TabIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Function to generate tab options
const createTabOptions = (
  iconNameFocused,
  iconNameUnfocused,
  iconLibrary,
  navigation,
  toggleAlertsBox,
) => ({
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
  headerShown: true,
  headerTitle: '',
  headerStyle: {
    backgroundColor: '#2563eb',
  },
  headerLeft: () => <Text style={styles.headerText}>Laredo311</Text>,
  headerRight: () => (
    <TouchableOpacity
      onPress={() => toggleAlertsBox()}
      title="Open Menu"
      color="#000" // Change as per your theme
      style={styles.bellIcon}>
      <MaterialCommunityIcons name="bell-outline" size={30} color="#f1f5f9" />
    </TouchableOpacity>
  ),
  tabBarInactiveBackgroundColor: '#2563eb', // Set your desired background color
  tabBarActiveBackgroundColor: '#2563eb', // Optionally, set a different color for active tabs
});

const styles = StyleSheet.create({
  headerText: {
    marginLeft: 20,
    fontFamily: 'Exo-BoldItalic',
    fontSize: 25,
    color: '#f1f5f9',
  },
  bellIcon: {marginRight: 20},
});

export default createTabOptions;