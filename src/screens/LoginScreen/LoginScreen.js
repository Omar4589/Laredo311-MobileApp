import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native'; //this hook runs everytime the screen comes into focus
import {useAuthContext} from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginFormComponent/LoginForm';
import SignUpForm from '../../components/SignUpFormComponent/SignUpForm';
import SnackBar from '../../components/SnackBarComponent/SnackBar';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const {isLoggedIn} = useAuthContext();
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

export default LoginScreen;
