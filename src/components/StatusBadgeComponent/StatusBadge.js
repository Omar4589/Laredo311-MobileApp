import React from 'react';
import {View, Text} from 'react-native';

const StatusBadge = ({status}) => {
  return (
    <View
      className={`${
        status === 'Canceled'
          ? 'bg-red-600'
          : status === 'Completed'
          ? 'bg-slate-800'
          : 'bg-green-500'
      }  px-3 rounded-md w-max`}>
      <Text
        className="
        text-base text-center text-slate-100 font-exo font-bold ">
        {status}
      </Text>
    </View>
  );
};

export default StatusBadge;
