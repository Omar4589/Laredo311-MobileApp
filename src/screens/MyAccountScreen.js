import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyAlertsBox from '../components/MyAlertsBox';

const MyAccount = () => {
  return (
    <SafeAreaView>
      <MyAlertsBox />
      <Text>
        My Account below <Icon name="home" size={15} color="#000000" />
      </Text>
    </SafeAreaView>
  );
};

export default MyAccount;
