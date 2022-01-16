import React from 'react';
import {View, Text, Button} from 'react-native';

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
          margin: 10,
        }}>
        Article Page
      </Text>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          margin: 10,
        }}>
        (Stack Navigation)
      </Text>
    </View>
  );
};

export default screenTwo;
