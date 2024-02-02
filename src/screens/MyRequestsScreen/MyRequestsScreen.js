import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import RequestCard from '../../components/RequestCard/RequestCard';

const MyRequests = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <View style={styles.totalsContainer}>
            <View style={styles.totals}>
              <Text
                style={{
                  ...styles.totalstext,
                }}>
                Total Requests:
              </Text>
              <Text style={styles.numbers}>12</Text>
            </View>

            <View style={styles.activeAndCompletedContainer}>
              <View style={styles.totals}>
                <Text style={styles.totalstext}>Active:</Text>
                <Text style={styles.numbers}>4</Text>
              </View>

              <View style={styles.totals}>
                <Text style={styles.totalstext}>Completed:</Text>
                <Text style={styles.numbers}>8</Text>
              </View>
            </View>
          </View>

          <View style={styles.myRequestContainer}>
            <Text style={styles.title}>My Requests:</Text>

            <RequestCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {width: '100%', height: '100%'},
  mainContainer: {flexDirection: 'column', alignItems: 'center', marginTop: 30},
  totalsContainer: {
    shadowOffset: {width: 1, height: 3},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
    width: '85%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  totals: {
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  activeAndCompletedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 4,
    paddingTop: 10,
  },
  totalstext: {fontSize: 16, fontWeight: '500'},
  numbers: {
    fontSize: 40,
    paddingHorizontal: 10,
    color: '#2563eb',
    fontFamily: 'Exo-BoldItalic',
  },
  myRequestContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 50,

    alignItems: 'center',
  },
  title: {textAlign: 'left', width: '100%', fontSize: 20, fontWeight: '500'},
});
export default MyRequests;
