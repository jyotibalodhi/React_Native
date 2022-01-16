import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screenOne from '../screens/screenOne';
import screenThree from '../screens/screenThree';
import screenFour from '../screens/screenFour';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={screenOne} />
    </Stack.Navigator>
  );
};
const FeedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Feed" component={screenThree} />
    </Stack.Navigator>
  );
};

const HelpStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Help" component={screenFour} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, FeedStackNavigator, HelpStackNavigator};
