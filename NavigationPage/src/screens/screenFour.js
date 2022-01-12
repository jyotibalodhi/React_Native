import React from 'react';
import {View, Text} from 'react-native';

const screenFour = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Settings Page
      </Text>
    </View>
  );
};

export default screenFour;
