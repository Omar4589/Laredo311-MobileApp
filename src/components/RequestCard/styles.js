import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  touchableHightlight: {
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 5,
    minWidth: '100%',
  },
  requestCard: {
    width: '100%',
    shadowOffset: {width: 1, height: 3},
    shadowColor: '#636363',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#f1f5f9',
    borderRadius: 6,
    padding: 10,
  },
  typeAndDateText: {fontSize: 15},
  typeAndDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  address: {
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 16,
  },
  status: {textAlign: 'right', fontSize: 20, color: '#2563eb'},
});

export default styles;
