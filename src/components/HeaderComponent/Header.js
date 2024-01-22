import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AlertsBox from './AlertsBox';
const myIcon = <Icon name="bell" size={25} color="#f1f5f9" />;

const Header = ({appName}) => {
  const [showAlertsBox, setShowAlertsBox] = useState(false);

  const toggleAlertsBox = () => {
    setShowAlertsBox(prevState => {
      return !prevState;
    });
  };

  return (
    <View className="flex-row justify-between items-center h-14 px-6 bg-blue-500 ">
      <Text className="text-3xl text-slate-100 font-exoBI">{appName}</Text>
      <TouchableOpacity onPress={toggleAlertsBox}>{myIcon}</TouchableOpacity>
      <AlertsBox showAlertsBox={showAlertsBox} />
    </View>
  );
};

export default Header;
