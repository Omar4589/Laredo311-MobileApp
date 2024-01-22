import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Header from './components/HeaderComponent/Header.js';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="bg-blue-500">
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <Header appName="LAREDO311" />
        {/* <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={} />
        </Stack.Navigator> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
