import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="bell" size={25} color="#eeeeee" />;

const Header = ({appName}) => {
  return (
    <View className="flex-row justify-between items-center h-14 px-6 bg-blue-500 ">
      <Text className="text-3xl text-slate-100 font-exoBI">{appName}</Text>
      <TouchableOpacity>{myIcon}</TouchableOpacity>
    </View>
  );
};

export default Header;
