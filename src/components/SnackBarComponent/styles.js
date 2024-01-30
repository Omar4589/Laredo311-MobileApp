import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    top: 70,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 6,
    zIndex: 50,
  },
  text: {
    color: '#f1f5f9',
    paddingVertical: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default styles;
