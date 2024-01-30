import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerVisible: {
    backgroundColor: '#f1f9f5',
    shadowColor: '#334155', // shadow-slate-300
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    height: 250,
    width: 180,
    paddingVertical: 10,
    position: 'absolute',
    right: 25,
    top: 5,
    zIndex: 40,
    borderRadius: 10,
    display: 'flex',
  },
  containerHidden: {
    display: 'none',
  },
  viewComponent: {},
  noAlertsContainer: {
    alignItems: 'center',
  },
  alertText: {
    textAlign: 'left',
    paddingVertical: 6,
  },
});

export default styles;
