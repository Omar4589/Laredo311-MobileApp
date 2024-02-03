import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyRequestsScreen from '../../screens/MyRequestsScreen/MyRequestsScreen';
import ViewRequestScreen from '../../screens/ViewRequestScreen/ViewRequestScreen';
import createScreenOptions from '../BottomTabsNavigator/createScreenOptions';
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
          headerTintColor: '#2563ea',
          headerTitle: `Request: #${route.params.requestNumber}`,
          headerStyle: {backgroundColor: '#f2f2f2'},
          headerTitleStyle: {color: '#2563ea'},
        })}
        name="ViewRequest"
        component={ViewRequestScreen}
      />
    </MyRequests.Navigator>
  );
};

export default MyRequestsStack;
