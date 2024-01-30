import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useAlertsContext} from '../../contexts/AlertsContext';
import Alert from './Alert';
import styles from './styles';

const MyAlertsBox = alerts => {
  const {showAlertsBox} = useAlertsContext();

  const containerStyles = showAlertsBox
    ? styles.containerVisible
    : styles.containerHidden;

  //for testing purposes
  const a = [
    {number: 1, status: 'canceled'},
    {number: 3, status: 'canceled'},
    {number: 13, status: 'canceled'},
    {number: 14, status: 'canceled'},
    {number: 18, status: 'canceled'},
    {number: 134, status: 'canceled'},
    {number: 178, status: 'canceled'},
  ];

  return (
    <SafeAreaView style={containerStyles}>
      <View style={styles.viewComponent}>
        {!a || a.length === 0 ? (
          <View style={styles.noAlertsContainer}>
            <Text>You have no alerts.</Text>
          </View>
        ) : (
          <View>
            <ScrollView>
              {a.map(alert => (
                <Alert key={a.number} alert={alert} />
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MyAlertsBox;
