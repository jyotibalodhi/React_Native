import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';
import screenOne from './src/screens/screenOne';
import screenTwo from './src/screens/screenTwo';
import screenThree from './src/screens/screenThree';
import screenFour from './src/screens/screenFour';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Screen Two') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Screen Three') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Screen Four') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={screenOne} />
        <Tab.Screen name="Screen Two" component={screenTwo} />
        <Tab.Screen name="Screen Three" component={screenThree} />
        <Tab.Screen name="Screen Four" component={screenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
