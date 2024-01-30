import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useAuthContext} from '../../contexts/AuthContext';
import BottomTabsNavigator from '../BottomTabsNavigator/BottomTabsNavigator';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import MyAlertsBox from '../../components/MyAlertsBoxComponent/MyAlertsBox';

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
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
          drawerItemStyle: {},
          drawerLabel: 'Home',
        }}
      />

      <Drawer.Screen
        name="About"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Contact Us"
        component={BottomTabsNavigator}
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

      <Drawer.Screen
        name="My Alerts"
        component={MyAlertsBox}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
