import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenOne from './src/screens/screenOne';
import screenTwo from './src/screens/screenTwo';
import screenThree from './src/screens/screenThree';
import screenFour from './src/screens/screenFour';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={screenOne} />
        <Stack.Screen name="Screen Two" component={screenTwo} />
        <Stack.Screen name="Screen Three" component={screenThree} />
        <Stack.Screen name="Screen Four" component={screenFour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
