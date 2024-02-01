import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import TabIcon from './TabIconComponent/TabIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{marginRight: 10}}
      onPress={() => {
        // Open the drawer
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      {/* Replace 'YourIconComponent' with your icon component */}
      <TabIcon name="menu" library={Ionicons} size={30} color={'#2563eb'} />
    </TouchableOpacity>
  );
};

export default DrawerIcon;
