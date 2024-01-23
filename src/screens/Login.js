import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <SafeAreaView>
      <Text>
        You are at the login screen{' '}
        <Icon name="home" size={15} color="#000000" />
      </Text>
    </SafeAreaView>
  );
};

export default Login;
