import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import Auth from '../utils/auth';

const LoginScreen = ({navigation}) => {
  useEffect(() => {
    if (Auth.loggedIn()) {
      // Navigate to the Home screen if the user is already logged in
      navigation.navigate('ReturnHome');
    }
  }, [navigation]);
  const [screen, setscreen] = useState('login');

  const toggleScreen = () => {
    setscreen(screen === 'login' ? 'signup' : 'login');
  };

  return !Auth.loggedIn() ? (
    navigation.navigate('ReturnHome')
  ) : (
    <SafeAreaView style={styles.container}>
      <Text
        style={screen === 'signup' ? styles.laredo311Signup : styles.laredo311}>
        Laredo311
      </Text>
      {screen === 'login' ? (
        <LoginForm navigation={navigation} toggleScreen={toggleScreen} />
      ) : (
        <SignUpForm navigation={navigation} toggleScreen={toggleScreen} />
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
