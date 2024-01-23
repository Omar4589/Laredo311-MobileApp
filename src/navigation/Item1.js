import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Item1Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Item 1 Screen</Text>
      <Button
        title="Go Back to Menu"
        onPress={() => navigation.goBack()} // Use navigation to go back
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Item1Screen;
