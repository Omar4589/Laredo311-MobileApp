import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import createScreenOptions from '../../utils/createScreenOptions';
import {useAlertsContext} from '../../contexts/AlertsContext';

const Home = createNativeStackNavigator();

const HomeStack = () => {
  const {toggleAlertsBox} = useAlertsContext();
  return (
    <Home.Navigator screenOptions={{headerShown: false}}>
      <Home.Screen
        options={createScreenOptions(toggleAlertsBox)}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Home.Navigator>
  );
};

export default HomeStack;
