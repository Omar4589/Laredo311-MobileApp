import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

const Alert = ({alert}) => {
  //   const navigation = useNavigation();
  //   const requestInfo = () => {
  //     navigation.navigate('RequestInfo');
  //   };

  return (
    <Pressable
      key={alert.number}
      onPress={() => console.log('you pressed an alert')}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#f1f5f9',
          marginVertical: 5,
          marginHorizontal: 5,
          paddingHorizontal: 10,
          borderRadius: 3,
        },
      ]}>
      <Text style={styles.alertText}>
        Your request #{alert.number} has been {alert.status}.
      </Text>
    </Pressable>
  );
};

export default Alert;
