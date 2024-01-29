import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#2563eb',
            padding: 15,
            borderRadius: 6,
            width: '50%',
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Submit A Request
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
