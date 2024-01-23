import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/navigation/Navigation';

function App() {
  return (
    <>
      <StatusBar />
      <Navigation />
    </>
  );
}

export default App;
