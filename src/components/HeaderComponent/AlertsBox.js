import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Alert from './Alert';

//for testing purposes
// const a = [
//   {number: 1, status: 'canceled'},
//   {number: 3, status: 'canceled'},
//   {number: 13, status: 'canceled'},
//   {number: 14, status: 'canceled'},
//   {number: 18, status: 'canceled'},
//   {number: 134, status: 'canceled'},
//   {number: 178, status: 'canceled'},
// ];

const AlertsBox = ({showAlertsBox, alerts}) => {
  return (
    <View
      className={`${
        showAlertsBox ? 'block' : 'hidden'
      } bg-slate-100 shadow-sm shadow-slate-300 rounded-lg px-4 py-3 absolute top-12 right-8 z-10 w-3/4 max-h-96`}>
      {!alerts || alerts.length === 0 ? (
        <View className="mx-auto">
          <Text>You have no alerts.</Text>
        </View>
      ) : (
        <View className="h-full">
          <ScrollView className="">
            {alerts.map(alert => (
              <Alert key={alert.number} alert={alert} />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default AlertsBox;
