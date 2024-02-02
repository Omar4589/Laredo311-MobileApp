import React from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';

const RequestCard = ({request}) => {
  return (
    <TouchableHighlight
      style={styles.touchableHightlight}
      underlayColor={'#2563ea'}
      onPress={() => console.log('you pressed a card')}>
      <View style={styles.requestCard}>
        <View style={styles.typeAndDateContainer}>
          <Text style={styles.typeAndDateText}>
            {request.requestType}{' '}
            <FontAwesome6
              name="road-circle-exclamation"
              size={20}
              color={'#1e293b'} //slate-800
            />
          </Text>

          <Text style={styles.typeAndDateText}>{request.date}</Text>
        </View>

        <Text style={styles.address}>{request.address}</Text>
        <Text
          style={[
            styles.status,
            request.status === 'Canceled' ? styles.canceledColor : {},
            request.status === 'Completed' ? styles.completedColor : {},
          ]}>
          {request.status}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default RequestCard;
