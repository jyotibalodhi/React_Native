import React from 'react';
import {View, Text} from 'react-native';

const screenOne = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 20,
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        Home Screen!
      </Text>
    </View>
  );
};

export default screenOne;
