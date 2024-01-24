import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpForm = ({toggleScreen}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // handle login here
    console.log(email, password);
  };

  return (
    <ScrollView
      style={{}}
      contentContainerStyle={{
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: 700,
      }}>
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
              value={firstName}
              onChangeText={setFirstName}
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
              value={lastName}
              onChangeText={setLastname}
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
          value={email}
          onChangeText={setUsername}
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
          value={password}
          onChangeText={setPassword}
          maxLength={16}
          secureTextEntry
        />

        <View style={styles.labels}>
          <Icon name="person" size={10} color={'black'} />
          <Text style={styles.labelsText}>CONFIRM PASSWORD</Text>
        </View>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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
