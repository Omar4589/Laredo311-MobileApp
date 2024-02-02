import React from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const RequestCard = ({request}) => {
  return (
    <TouchableHighlight
      className="rounded-lg mt-5 mb-1 min-w-full"
      underlayColor={'#2563ea'}
      onPress={() => console.log('you pressed a card')}>
      <View className="w-full bg-slate-100 rounded-lg shadow-sm shadow-slate-400 p-3">
        <View className="flex-row justify-between items-baseline">
          <Text className="text-base">
            {request.requestType}{' '}
            <FontAwesome6
              name="road-circle-exclamation"
              size={20}
              color={'#1e293b'}
            />
          </Text>

          <Text className="text-base">{request.date}</Text>
        </View>

        <Text className="text-center pt-3 pb-1 text-base">
          {request.address}
        </Text>
        <Text
          className={`text-right text-lg ${
            request.status === 'Canceled'
              ? 'text-red-600'
              : request.status === 'Completed'
              ? 'text-slate-800'
              : 'text-blue-600'
          }`}>
          {request.status}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default RequestCard;
