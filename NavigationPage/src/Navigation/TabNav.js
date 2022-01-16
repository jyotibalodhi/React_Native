import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-ionicons';
import {MainStackNavigator, FeedStackNavigator} from './StackNav';
import {HelpStackNavigator} from './StackNav';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Help') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTiǹtColor: 'gray',
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      })}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Feed" component={FeedStackNavigator} />
      <Tab.Screen name="Help" component={HelpStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
