import React from 'react';
import {Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Alert = ({alert}) => {
  const navigation = useNavigation();
  const requestInfo = () => {
    navigation.navigate('RequestInfo');
  };

  return (
    <Pressable
      key={alert.number}
      onPress={requestInfo}
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
