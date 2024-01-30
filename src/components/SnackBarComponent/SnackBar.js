import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

//We use the SnackBar component to show error / confirmation messages
const SnackBar = ({message}) => {
  return (
    <View style={styles.snackbar}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default SnackBar;
