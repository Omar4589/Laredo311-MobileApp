import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyAccountScreen from '../../screens/MyAccountScreen/MyAccountScreen';
import createScreenOptions from '../../utils/createScreenOptions';
import {useAlertsContext} from '../../contexts/AlertsContext';

const MyAccount = createNativeStackNavigator();

const MyAccountStack = () => {
  const {toggleAlertsBox} = useAlertsContext();
  return (
    <MyAccount.Navigator screenOptions={{headerShown: false}}>
      <MyAccount.Screen
        options={createScreenOptions(toggleAlertsBox)}
        name="MyAccountScreen"
        component={MyAccountScreen}
      />
    </MyAccount.Navigator>
  );
};

export default MyAccountStack;
