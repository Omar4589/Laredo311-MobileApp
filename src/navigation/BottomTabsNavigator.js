import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MyRequestsScreen from '../screens/MyRequestsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from '../components/LoginForm';
import MyAlertsBox from '../components/MyAlertsBox';
import {useAlertsContext} from '../utils/alertsBoxContext';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

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
  headerLeft: () => (
    <Text
      style={{
        marginLeft: 20,
        fontFamily: 'Exo-BoldItalic',
        fontSize: 25,
        color: '#f1f5f9',
      }}>
      Laredo311
    </Text>
  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => toggleAlertsBox()}
      title="Open Menu"
      color="#000" // Change as per your theme
      style={{marginRight: 20}}>
      <MaterialCommunityIcons name="bell-outline" size={30} color="#f1f5f9" />
    </TouchableOpacity>
  ),
  tabBarInactiveBackgroundColor: '#2563eb', // Set your desired background color
  tabBarActiveBackgroundColor: '#2563eb', // Optionally, set a different color for active tabs
});

// Generic Icon Component
const TabIcon = ({name, library, color, size}) => {
  const IconComponent = library;
  return <IconComponent name={name} size={size} color={color} />;
};

const BottomTabs = () => {
  const {toggleAlertsBox} = useAlertsContext();
  const navigation = useDrawerNavigation();
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
        component={HomeScreen} //setting this component has no effect here
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
