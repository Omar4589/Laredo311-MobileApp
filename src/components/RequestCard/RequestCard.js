import React from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';

const RequestCard = () => {
  return (
    <TouchableHighlight
      style={styles.touchableHightlight}
      underlayColor={'#2563ea'}
      onPress={() => console.log('you pressed a card')}>
      <View style={styles.requestCard}>
        <View style={styles.typeAndDateContainer}>
          <Text style={styles.typeAndDateText}>
            Pothole Repair{' '}
            <FontAwesome6
              name="road-circle-exclamation"
              size={20}
              color={'#1e293b'} //slate-800
            />
          </Text>

          <Text style={styles.typeAndDateText}>02/11/23</Text>
        </View>

        <Text style={styles.address}>5511 Marlin Dr, Laredo, Tx, 78043</Text>
        <Text style={styles.status}>Active</Text>
      </View>
    </TouchableHighlight>
  );
};

export default RequestCard;
