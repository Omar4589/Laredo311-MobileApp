import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {useAuthContext} from '../utils/authContext';
import BottomTabs from './BottomTabsNavigator';
import LoginScreen from '../screens/LoginScreen';
import MyRequestsScreen from '../screens/MyRequestsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = ({}) => {
  const {isLoggedIn, logoutFunc} = useAuthContext();
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: 230, backgroundColor: '#f1f5f9'},
        drawerActiveTintColor: '#2563eb',
        drawerPosition: 'right',
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name="ReturnHome"
        component={BottomTabs}
        options={{
          headerShown: false,
          drawerItemStyle: {},
          drawerLabel: 'Home',
        }}
      />
      {/* <Drawer.Screen
        name="My Requests"
        component={BottomTabs}
        options={{headerShown: false}}
        listeners={{
          drawerItemPress: e => {
            e.preventDefault(); // Prevent default action
            navigation.navigate('My Requests');
          },
        }}
      />
      <Drawer.Screen
        name="My Account"
        component={BottomTabs}
        options={{headerShown: false}}
        listeners={{
          drawerItemPress: e => {
            e.preventDefault(); // Prevent default action
            navigation.navigate('My Account');
          },
        }}
      /> */}
      <Drawer.Screen
        name="About"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Contact Us"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="LoginSignUp"
        component={LoginScreen}
        options={{
          headerShown: false,
          drawerLabel: isLoggedIn ? 'Logout' : 'Login / Sign Up',
        }}
        listeners={{
          drawerItemPress: async ev => {
            if (isLoggedIn) {
              ev.preventDefault;
              try {
                await logoutFunc();
                console.log('You just logged out');
                navigation.navigate('ReturnHome');
              } catch (e) {
                console.log(e); // Or handle the error more visibly
              }
            }
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
