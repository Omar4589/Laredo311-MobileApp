import React from 'react';
import {SafeAreaView, Text, View, ImageBackground, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RequestCard from '../../components/RequestCard/RequestCard';
import MyAlertsBox from '../../components/MyAlertsBoxComponent/MyAlertsBox';
import backgroundImage from '../../assets/images/backgroundimage.png';

const requests = [
  {
    date: '2024-01-01',
    type: 'Pothole Repair',
    address: '123 Main St, Anytown, CA, 90001',
    status: 'Active',
    number: 7241,
  },
  {
    date: '2024-01-02',
    type: 'Pothole Repair',
    address: '456 Oak St, Springfield, IL, 62704',
    status: 'Completed',
    number: 3351,
  },
  {
    date: '2024-01-03',
    type: 'Pothole Repair',
    address: '789 Pine St, Libertyville, NY, 10003',
    status: 'Canceled',
    number: 95,
  },
  {
    date: '2024-01-04',
    type: 'Pothole Repair',
    address: '321 Maple St, Smalltown, TX, 75001',
    status: 'Active',
    number: 3228,
  },
  {
    date: '2024-01-05',
    type: 'Pothole Repair',
    address: '654 Cedar St, Lakeview, FL, 33101',
    status: 'Completed',
    number: 8685,
  },
  {
    date: '2024-01-06',
    type: 'Pothole Repair',
    address: '987 Elm St, Rivertown, WA, 98001',
    status: 'Active',
    number: 4208,
  },
];

const MyRequests = ({navigation}) => {
  return (
    <SafeAreaView>
      <MyAlertsBox />
      <ScrollView className="w-full h-full">
        <View className="flex-col items-center mt-8">
          <View className="w-4/5 bg-slate-100 rounded-lg py-5 px-5 shadow-sm shadow-slate-400">
            <View className="justify-center items-baseline flex-row  ">
              <Text className="text-base font-semibold ">Total Requests:</Text>
              <Text className="text-4xl px-2 text-blue-600 font-exoBI ">
                12
              </Text>
            </View>

            <View className="flex-row justify-between pt-4">
              <View className="flex-row justify-center items-baseline">
                <Text className="text-base font-semibold">Active:</Text>
                <Text className="text-4xl px-2 text-blue-600 font-exoBI">
                  4
                </Text>
              </View>

              <View className="flex-row justify-center items-baseline">
                <Text className="text-base font-semibold">Completed:</Text>
                <Text className="text-4xl px-2 text-blue-600 font-exoBI">
                  8
                </Text>
              </View>
            </View>
          </View>

          <View className="w-full px-4 my-10 items-center">
            <Text className="w-full text-left text-xl font-semibold ">
              My Requests:
            </Text>
            {requests.map(r => {
              return (
                <RequestCard key={r.date} request={r} navigation={navigation} />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyRequests;
