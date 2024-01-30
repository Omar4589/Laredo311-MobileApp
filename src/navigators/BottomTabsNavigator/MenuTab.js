import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//This component is simply used as the 'Menu' tab in the bottom tabs navigator.

const Menu = () => {
  return (
    //Nothing inside of this return statement is shown to the user
    <SafeAreaView>
      <Text>
        This is the menu <Icon name="home" size={15} color="#000000" />
      </Text>
    </SafeAreaView>
  );
};

export default Menu;
