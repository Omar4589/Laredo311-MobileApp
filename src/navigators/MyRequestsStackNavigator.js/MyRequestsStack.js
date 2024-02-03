import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyRequestsScreen from '../../screens/MyRequestsScreen/MyRequestsScreen';
import ViewRequestScreen from '../../screens/ViewRequestScreen/ViewRequestScreen';
import createScreenOptions from '../../utils/createScreenOptions';
import {useAlertsContext} from '../../contexts/AlertsContext';

const MyRequests = createNativeStackNavigator();

const MyRequestsStack = ({}) => {
  const {toggleAlertsBox} = useAlertsContext();
  return (
    <MyRequests.Navigator screenOptions={{headerShown: false}}>
      <MyRequests.Screen
        options={createScreenOptions(toggleAlertsBox)}
        name="MyRequests"
        component={MyRequestsScreen}
      />
      <MyRequests.Screen
        options={({route}) => ({
          headerShown: true,
          headerBackTitleVisible: false,
          headerTintColor: '#f1f5f9',
          headerTitle: `Request: #${route.params.requestNumber}`,
          headerStyle: {backgroundColor: '#2563ea'},
          headerTitleStyle: {color: '#f1f5f9'},
        })}
        name="ViewRequest"
        component={ViewRequestScreen}
      />
    </MyRequests.Navigator>
  );
};

export default MyRequestsStack;
