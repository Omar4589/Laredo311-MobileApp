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

import Header from './src/components/HeaderComponent/Header.js';

function App() {
  return (
    <SafeAreaView className="bg-blue-500">
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Header appName="LAREDO311" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
