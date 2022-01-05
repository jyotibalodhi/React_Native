import React from 'react';
import {View, Text} from 'react-native';

const screenOne = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Screen Two
      </Text>
    </View>
  );
};

export default screenOne;
