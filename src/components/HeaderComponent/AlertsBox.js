import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import Alert from './Alert';

const AlertsBox = ({showAlerts, alerts}) => {
  const viewRequest = () => {};

  return (
    <View
      className={`${
        showAlerts ? 'block' : 'hidden'
      } bg-slate-100 shadow-sm shadow-slate-300 rounded-lg px-4 py-3 absolute top-12 right-8 z-10 w-3/4 max-h-96`}>
      {!alerts || alerts.length === 0 ? (
        <View className="mx-auto">
          <Text>You have no alerts.</Text>
        </View>
      ) : (
        <View className="h-full">
          <ScrollView className="">
            {alerts.map(alert => (
              <Alert alert={alert} />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default AlertsBox;
