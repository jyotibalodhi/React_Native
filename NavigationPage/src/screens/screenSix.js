import React from 'react';
import {View, Text} from 'react-native';

const screenSix = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Help Page
      </Text>
    </View>
  );
};

export default screenSix;
