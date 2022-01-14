import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabNavigator from './TabNav';
import {FeedStackNavigator} from './StackNav';
import {HelpStackNavigator} from './StackNav';
import screenThree from '../screens/screenThree';
import screenFour from '../screens/screenFour';
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{drawerLabel: 'Home'}}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="Feed"
        options={{drawerLabel: 'Feed'}}
        component={screenThree}
      />
      <Drawer.Screen
        name="Help"
        options={{drawerLabel: 'Help'}}
        component={screenFour}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
