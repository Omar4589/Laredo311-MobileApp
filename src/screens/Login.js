import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically handle the login logic
    console.log(email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.laredo311}>Laredo311</Text>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>

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
          textContentType="emailAddress"
        />

        <View style={styles.labels}>
          <Icon name="key" size={10} color={'black'} />
          <Text style={styles.labelsText}>PASSWORD</Text>
        </View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          autoComplete="password"
          maxLength={32}
          textContentType="password"
          secureTextEntry // This hides the password
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 190,
  },
  laredo311: {fontSize: 35, marginBottom: 70},
  form: {
    width: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    marginLeft: 20,
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
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
