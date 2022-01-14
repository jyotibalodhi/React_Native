import React from 'react';
import {View, Text, Button} from 'react-native';

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
      <Button
        title="Go to Article Page"
        onPress={() => navigation.navigate('Article')}
      />
    </View>
  );
};

export default screenOne;
