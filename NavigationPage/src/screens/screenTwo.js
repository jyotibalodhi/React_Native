import React from 'react';
import {View, Text} from 'react-native';

const screenTwo = ({navigation}) => {
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
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Article Page
      </Text>
    </View>
  );
};

export default screenTwo;
