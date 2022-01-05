import React from 'react';
import {View, Text, Button} from 'react-native';

const screenOne = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
        padding: 20,
      }}>
      <Button
        color={'green'}
        title="Go to page 2"
        onPress={() => navigation.navigate('Screen Two')}></Button>

      <Button
        color={'green'}
        title="Go to page 3"
        onPress={() => navigation.navigate('Screen Three')}></Button>

      <Button
        color={'green'}
        title="Go to page 4"
        onPress={() => navigation.navigate('Screen Four')}></Button>
    </View>
  );
};

export default screenOne;
