import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {MainStackNavigator, FeedStackNavigator} from './StackNav';

import screenFour from '../screens/screenFour';
import screenOne from '../screens/screenOne';
import screenThree from '../screens/screenThree';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Help">
      <Drawer.Screen
        name="Help"
        options={{drawerLabel: 'Help'}}
        component={screenFour}
      />
      <Drawer.Screen
        name="Home"
        options={{drawerLabel: 'Home'}}
        component={screenOne}
      />
      <Drawer.Screen
        name="Feed"
        options={{drawerLabel: 'Feed'}}
        component={screenThree}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
