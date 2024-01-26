import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native'; //this hook runs everytime the screen comes into focus
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import Auth from '../utils/auth';
import SnackBar from '../components/SnackBarComponent/SnackBar';

const LoginScreen = ({navigation}) => {
  const [screen, setscreen] = useState('login');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSnackBar, setShowSnackBar] = useState(false);

  useFocusEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = await Auth.loggedIn();
      if (authStatus.success) {
        navigation.navigate('ReturnHome');
      }
    };
    checkAuthStatus();
  });

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
