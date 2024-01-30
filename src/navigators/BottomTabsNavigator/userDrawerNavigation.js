import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const useDrawerNavigation = () => {
  const navigation = useNavigation();
  return React.useMemo(() => {
    return {
      ...navigation,
      openDrawer: () => navigation.dispatch(DrawerActions.openDrawer()),
      closeDrawer: () => navigation.dispatch(DrawerActions.closeDrawer()),
    };
  }, [navigation]);
};

export default useDrawerNavigation;
