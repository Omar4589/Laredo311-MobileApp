import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const Home = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Home.Navigator screenOptions={{headerShown: false}}>
      <Home.Screen name="HomeScreen" component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeStack;
