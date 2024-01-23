import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
  return (
    <SafeAreaView>
      <Text>
        This is the menu <Icon name="home" size={15} color="#000000" />
      </Text>
    </SafeAreaView>
  );
};

export default Menu;
