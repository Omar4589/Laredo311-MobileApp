import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useHeaderVisibility} from '../../contexts/HeaderVisibilityContext';

const ViewRequestScreen = ({route}) => {
  const {setHeaderVisible} = useHeaderVisibility();
  const {
    requestNumber,
    requestDate,
    requestType,
    requestAddress,
    requestStatus,
  } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      setHeaderVisible(false);

      return () => {
        // Show the header when leaving Screen2
        setHeaderVisible(true);
      };
    }, [setHeaderVisible]),
  );
  return (
    <View>
      <Text>This is the view request screen</Text>
      <Text>{requestNumber}</Text>
      <Text>{requestDate}</Text>
      <Text>{requestType}</Text>
      <Text>{requestAddress}</Text>
      <Text>{requestStatus}</Text>
    </View>
  );
};

export default ViewRequestScreen;
