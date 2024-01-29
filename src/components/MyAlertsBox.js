import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useAlertsContext} from '../utils/alertsBoxContext';

const MyAlertsBox = () => {
  const {showAlertsBox} = useAlertsContext();
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#2563ea',
        height: 250,
        width: 160,
        position: 'absolute',
        right: 25,
        top: 5,
        zIndex: 40,
        borderRadius: 10,
        display: showAlertsBox ? 'flex' : 'none',
      }}>
      <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
        <Text>This is the my alerts box</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyAlertsBox;
