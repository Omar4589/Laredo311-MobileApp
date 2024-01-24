import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const LoginScreen = () => {
  const [screen, setscreen] = useState('login');

  const toggleScreen = () => {
    setscreen(screen === 'login' ? 'signup' : 'login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={screen === 'signup' ? styles.laredo311Signup : styles.laredo311}>
        Laredo311
      </Text>
      {screen === 'login' ? (
        <LoginForm toggleScreen={toggleScreen} />
      ) : (
        <SignUpForm toggleScreen={toggleScreen} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  laredo311: {
    fontSize: 35,
    marginBottom: 70,
    fontFamily: 'Exo-BoldItalic',
  },
  laredo311Signup: {
    marginTop: 92,
    fontSize: 35,
    marginBottom: 50,
    fontFamily: 'Exo-BoldItalic',
  },
});

export default LoginScreen;
