import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import RequestCard from '../../components/RequestCard/RequestCard';

const requests = [
  {
    date: '2024-01-01',
    requestType: 'Pothole Repair',
    address: '123 Main St, Anytown, CA, 90001',
    status: 'Active',
  },
  {
    date: '2024-01-02',
    requestType: 'Pothole Repair',
    address: '456 Oak St, Springfield, IL, 62704',
    status: 'Completed',
  },
  {
    date: '2024-01-03',
    requestType: 'Pothole Repair',
    address: '789 Pine St, Libertyville, NY, 10003',
    status: 'Canceled',
  },
  {
    date: '2024-01-04',
    requestType: 'Pothole Repair',
    address: '321 Maple St, Smalltown, TX, 75001',
    status: 'Active',
  },
  {
    date: '2024-01-05',
    requestType: 'Pothole Repair',
    address: '654 Cedar St, Lakeview, FL, 33101',
    status: 'Completed',
  },
  {
    date: '2024-01-06',
    requestType: 'Pothole Repair',
    address: '987 Elm St, Rivertown, WA, 98001',
    status: 'Active',
  },
];

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

            <View style={styles.ActiveAndCompletedContainer}>
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
            {requests.map(r => {
              return <RequestCard key={r.date} request={r} />;
            })}
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
  ActiveAndCompletedContainer: {
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
