import 'react-native-gesture-handler';
import React from 'react';
import {setContext} from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigators/DrawerNavigator/DrawerNavigator';
import {AuthProvider} from './src/contexts/AuthContext';
import {AlertsProvider} from './src/contexts/AlertsContext';
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// over wifi with device 192.168.16.219:3001/graphql

const authLink = setContext(async (_, {headers}) => {
  // Get the authentication token from storage if it exists
  const token = await AsyncStorage.getItem('id_token'); // Or AsyncStorage
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AlertsProvider>
          <StatusBar />
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </AlertsProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
