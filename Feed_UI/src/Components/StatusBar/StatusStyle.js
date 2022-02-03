import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  StatusBar: {
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderTopColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  StatusItems: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  Avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 3,
    marginHorizontal: 10,
  },
});
export default styles;
