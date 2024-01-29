import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useAuthContext} from '../utils/authContext';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginForm = ({
  toggleScreen,
  navigation,
  setErrorMessage,
  setShowSnackBar,
}) => {
  const {loginFunc, error} = useAuthContext();

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const openSnackBar = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
    }, 3000);
  };

  //function with regex to check if email is in valid format
  const isValidEmail = email => {
    const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.test(String(email));
  };

  const handleLogin = async () => {
    try {
      const lce = userInput.email.toLowerCase();

      //check if email is in a valid format
      if (!isValidEmail(lce)) {
        setErrorMessage('Please enter a valid email.');
        openSnackBar();
        return;
      }

      const response = await loginFunc(lce, userInput.password);

      if (!response) {
        setErrorMessage(error.message);
        openSnackBar();
        return;
      }
      console.log('you just logged in');
      navigation.navigate('ReturnHome');
      return;
    } catch (e) {
      setErrorMessage(e.message);
      openSnackBar();
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.labels}>
        <Icon name="person" size={10} color={'black'} />
        <Text style={styles.labelsText}>EMAIL</Text>
      </View>
      <TextInput
        style={styles.input}
        value={userInput.email}
        onChangeText={value => setUserInput({...userInput, email: value})}
        autoComplete="email"
        maxLength={50}
        selectTextOnFocus={false}
        textContentType="emailAddress"
      />

      <View style={styles.labels}>
        <Icon name="key" size={10} color={'black'} />
        <Text style={styles.labelsText}>PASSWORD</Text>
      </View>
      <TextInput
        style={styles.input}
        value={userInput.password}
        onChangeText={value => setUserInput({...userInput, password: value})}
        autoComplete="password"
        maxLength={32}
        textContentType="password"
        secureTextEntry // This hides the password
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupView}>
        <Text>Don't have an account yet?</Text>
        <TouchableHighlight
          style={styles.highlight}
          underlayColor={'#bfdbfe'}
          onPress={toggleScreen}>
          <Text style={styles.signupText}> Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '80%',
    marginBottom: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    marginLeft: 5,
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
  labelsText: {
    fontSize: 10,
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  highlight: {borderRadius: 5},
  signupView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  signupText: {
    color: '#2563eb',
  },
});

export default LoginForm;
