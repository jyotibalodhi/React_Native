import React from 'react';
import {View, Text} from 'react-native';

const screenThree = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Screen Three
      </Text>
    </View>
  );
};

export default screenThree;
