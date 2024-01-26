import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../utils/mutations';
import Auth from '../utils/auth';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpForm = ({toggleScreen, navigation}) => {
  const [userInput, setUserInput] = useState({
    firstname: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [createUser, {error}] = useMutation(CREATE_USER);

  //function with regex to check if email is in valid format
  const isValidEmail = email => {
    const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.test(String(email));
  };

  // Update your function to accept both the field name and value
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
      if (userInput.firstName.length > 23) {
        console.log(false);
        return;
      }
      if (userInput.lastName.length > 23) {
        console.log(false);
        return;
      }
      //check if new passwords match
      if (userInput.confirmpassword !== userInput.password) {
        console.log(true);
        return;
      }
      //check if email is in a valid format
      if (!isValidEmail(userInput.email)) {
        console.log(false);
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
      if (data.createUser.token) {
        Auth.login(data.createUser.token);
        navigation.navigation('ReturnHome');
      }
    } catch (e) {
      Alert.alert('Sign Up Error');
    }
  };
  console.log(userInput);

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
              maxLength={26}
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
              maxLength={26}
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
          maxLength={16}
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
          maxLength={16}
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

const styles = StyleSheet.create({
  contentcontainer: {alignItems: 'center', margin: 0, padding: 0, height: 700},
  form: {
    width: '90%',
    paddingBottom: 100,
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
  namesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  names: {width: '45%'},
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

export default SignUpForm;
