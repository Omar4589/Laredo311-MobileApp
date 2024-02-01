import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyRequestsScreen from '../../screens/MyRequestsScreen/MyRequestsScreen';

const MyRequests = createNativeStackNavigator();

const MyRequestsStack = () => {
  return (
    <MyRequests.Navigator screenOptions={{headerShown: false}}>
      <MyRequests.Screen name="MyRequests" component={MyRequestsScreen} />
    </MyRequests.Navigator>
  );
};

export default MyRequestsStack;
