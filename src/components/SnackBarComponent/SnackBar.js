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
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#f97316', // bg-orange-600
    marginTop: 16, // mt-4
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%', // w-11/12
    alignSelf: 'center',
    borderRadius: 6, // rounded
    elevation: 4, // shadow-lg
    zIndex: 50, // z-50
  },
  text: {
    color: '#f1f5f9', // text-slate-100
    paddingVertical: 12, // py-3
    paddingHorizontal: 20, // px-5
    textAlign: 'center', // text-center
    fontSize: 18, // text-lg
  },
});

export default SnackBar;
