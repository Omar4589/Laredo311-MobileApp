import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native'; //this hook runs everytime the screen comes into focus
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { useAuthContext } from '../utils/authContext';
import SnackBar from '../components/SnackBarComponent/SnackBar';

const LoginScreen = ({navigation}) => {
  const {isLoggedIn} = useAuthContext;
  const [screen, setscreen] = useState('login');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSnackBar, setShowSnackBar] = useState(false);

  useFocusEffect(() => {
    const checkAuthStatus = async () => {
      if (isLoggedIn) {
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
      {showSnackBar && <SnackBar message={errorMessage} />}
      <Text
        style={screen === 'signup' ? styles.laredo311Signup : styles.laredo311}>
        Laredo311
      </Text>
      {screen === 'login' ? (
        <LoginForm
          navigation={navigation}
          toggleScreen={toggleScreen}
          setErrorMessage={setErrorMessage}
          setShowSnackBar={setShowSnackBar}
        />
      ) : (
        <SignUpForm
          navigation={navigation}
          toggleScreen={toggleScreen}
          setErrorMessage={setErrorMessage}
          setShowSnackBar={setShowSnackBar}
        />
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
