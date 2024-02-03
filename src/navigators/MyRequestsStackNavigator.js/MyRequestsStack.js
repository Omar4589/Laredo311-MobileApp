import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyRequestsScreen from '../../screens/MyRequestsScreen/MyRequestsScreen';
import ViewRequestScreen from '../../screens/ViewRequestScreen/ViewRequestScreen';
import createScreenOptions from '../../utils/createScreenOptions';
import {useAlertsContext} from '../../contexts/AlertsContext';

const MyRequests = createNativeStackNavigator();

const MyRequestsStack = ({}) => {
  const statusText = route => {
    return (
      <View
        className={`${
          route.params.requestStatus === 'Canceled'
            ? 'bg-red-600'
            : route.params.requestStatus === 'Completed'
            ? 'bg-slate-800'
            : 'bg-green-500'
        }  px-3 rounded-md`}>
        <Text
          className="
      text-base text-slate-100 font-exo font-bold">
          {route.params.requestStatus}
        </Text>
      </View>
    );
  };

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
          headerRight: () => statusText(route),
          headerStyle: {backgroundColor: '#2563ea'},
          headerTitleStyle: {
            color: '#f1f5f9',
            fontFamily: 'exo',
            fontWeight: '600',
          },
        })}
        name="ViewRequest"
        component={ViewRequestScreen}
      />
    </MyRequests.Navigator>
  );
};

export default MyRequestsStack;
