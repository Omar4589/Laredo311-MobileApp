import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import MyAlertsBox from '../../components/MyAlertsBoxComponent/MyAlertsBox';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <MyAlertsBox />
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit A Request</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
