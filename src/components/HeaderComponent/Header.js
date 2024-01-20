import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Header = ({appName}) => {
  return (
    <View className="flex-row justify-between items-center h-16 px-6 bg-blue-500">
      <Text className="text-slate-100 text-xl">{appName}</Text>
      <TouchableOpacity>
        <Text>Icon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
