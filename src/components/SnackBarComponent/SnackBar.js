import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SnackBar = ({message}) => {
  return (
    <View style={styles.snackbar}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    top: 70,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 6,
    zIndex: 50,
  },
  text: {
    color: '#f1f5f9', // text-slate-100
    paddingVertical: 16, // py-3
    paddingHorizontal: 20, // px-5
    textAlign: 'center', // text-center
    fontSize: 18, // text-lg
  },
});

export default SnackBar;
