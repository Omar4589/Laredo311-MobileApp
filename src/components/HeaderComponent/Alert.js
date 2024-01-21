import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

const Alert = ({alert}) => {
  const viewRequest = () => {};

  return (
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
  );
};

export default Alert;
