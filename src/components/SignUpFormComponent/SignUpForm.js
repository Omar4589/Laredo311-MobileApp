import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../../utils/mutations';
import Auth from '../../utils/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SignUpForm = ({
  toggleScreen,
  navigation,
  setErrorMessage,
  setShowSnackBar,
}) => {
  //form state
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [createUser, {error}] = useMutation(CREATE_USER);

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

  const handleInputChange = (name, value) => {
    let newValue = value;

    if (name === 'email') {
      newValue = value.toLowerCase();
    }

    setUserInput({
      ...userInput,
      [name]: newValue,
    });
  };

  const handleSignUp = async () => {
    try {
      //check if the username is greater than 23 characters
      if (userInput.firstName.length === 0 || userInput.lastName.length === 0) {
        setErrorMessage('Name fields cannot be empty.');
        openSnackBar();
        return;
      }
      //check if email is in a valid format
      if (!isValidEmail(userInput.email)) {
        setErrorMessage('Please enter a valid email.');
        openSnackBar();
        return;
      }
      if (userInput.password.length < 8) {
        setErrorMessage('Please enter a password at least 8 characters long.');
        openSnackBar();
        return;
      }
      //check if new passwords match
      if (userInput.confirmPassword !== userInput.password) {
        setErrorMessage('Passwords do not match.');
        openSnackBar();
        return;
      }

      const {data} = await createUser({
        variables: {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          email: userInput.email,
          password: userInput.password,
        },
      });
      if (data.createUser && data.createUser.token) {
        Auth.login(data.createUser.token);
        navigation.navigation('ReturnHome');
      } else {
        setErrorMessage(error.message);
        openSnackBar();
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
      openSnackBar();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentcontainer}>
      <View style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.namesView}>
          <View style={styles.names}>
            <View style={styles.labels}>
              <Icon name="person" size={10} color={'black'} />
              <Text style={styles.labelsText}>FIRST NAME</Text>
            </View>
            <TextInput
              style={styles.input}
              value={userInput.firstName}
              onChangeText={value => handleInputChange('firstName', value)}
              maxLength={23}
              selectTextOnFocus={false}
            />
          </View>

          <View style={styles.names}>
            <View style={styles.labels}>
              <Icon name="person" size={10} color={'black'} />
              <Text style={styles.labelsText}>LAST NAME</Text>
            </View>
            <TextInput
              style={styles.input}
              value={userInput.lastName}
              onChangeText={value => handleInputChange('lastName', value)}
              maxLength={23}
              selectTextOnFocus={false}
            />
          </View>
        </View>

        <View style={styles.labels}>
          <Icon name="person" size={10} color={'black'} />
          <Text style={styles.labelsText}>EMAIL</Text>
        </View>
        <TextInput
          style={styles.input}
          value={userInput.email}
          onChangeText={value => handleInputChange('email', value)}
          autoComplete="email"
          maxLength={50}
          selectTextOnFocus={false}
        />

        <View style={styles.labels}>
          <Icon name="key" size={10} color={'black'} />
          <Text style={styles.labelsText}>PASSWORD</Text>
        </View>
        <TextInput
          style={styles.input}
          value={userInput.password}
          onChangeText={value => handleInputChange('password', value)}
          maxLength={32}
          secureTextEntry
        />

        <View style={styles.labels}>
          <Icon name="person" size={10} color={'black'} />
          <Text style={styles.labelsText}>CONFIRM PASSWORD</Text>
        </View>
        <TextInput
          style={styles.input}
          value={userInput.confirmPassword}
          onChangeText={value => handleInputChange('confirmPassword', value)}
          maxLength={32}
          selectTextOnFocus={false}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signupView}>
          <Text>Have an account already?</Text>
          <TouchableHighlight
            style={styles.highlight}
            underlayColor={'#bfdbfe'}
            onPress={toggleScreen}>
            <Text style={styles.signupText}> Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpForm;
