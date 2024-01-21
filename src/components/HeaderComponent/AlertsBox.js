import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

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
              <Pressable
                key={alert.number}
                onPress={viewRequest}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#f1f5f9',
                    marginVertical: 5,
                    paddingHorizontal: 17,
                    borderRadius: 3,
                  },
                ]}>
                <Text className="text-sm text-left  py-2">
                  Your request #{alert.number} has been {alert.status}.
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default AlertsBox;
