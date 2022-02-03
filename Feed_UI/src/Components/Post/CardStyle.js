import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  CardTitle: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  Place: {
    color: 'violet',
    fontSize: 12,
    fontStyle: 'italic',
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
