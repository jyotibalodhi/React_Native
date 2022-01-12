import React from 'react';
import {View, Text} from 'react-native';

const screenFive = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Contact Page
      </Text>
    </View>
  );
};

export default screenFive;
