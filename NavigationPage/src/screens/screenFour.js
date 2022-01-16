import React from 'react';
import {View, Text, Button} from 'react-native';

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
        Help Page
      </Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default screenFour;
