import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderVisibility} from '../../contexts/HeaderVisibilityContext';
import {set} from 'mongoose';

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
    <SafeAreaView>
      <Text>This is the view request screen</Text>
      <Text>{requestNumber}</Text>
      <Text>{requestDate}</Text>
      <Text>{requestType}</Text>
      <Text>{requestAddress}</Text>
      <Text>{requestStatus}</Text>
    </SafeAreaView>
  );
};

export default ViewRequestScreen;
