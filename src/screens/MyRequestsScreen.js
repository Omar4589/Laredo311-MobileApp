import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyAlertsBox from '../components/MyAlertsBox';

const MyRequests = () => {
  return (
    <SafeAreaView>
      <MyAlertsBox />
      <Text>
        View your requests here <Icon name="home" size={15} color="#000000" />
      </Text>
    </SafeAreaView>
  );
};

export default MyRequests;
