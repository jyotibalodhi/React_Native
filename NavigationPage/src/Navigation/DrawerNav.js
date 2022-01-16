import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './TabNav';
import {MainStackNavigator} from './StackNav';
import screenThree from '../screens/screenThree';
import screenFour from '../screens/screenFour';
import {createStackNavigator} from '@react-navigation/stack';
import SidebarMenu from './sidemenu';
import screenTwo from '../screens/screenTwo';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MainDrawerNavigator} />
      <Stack.Screen
        name="Article"
        component={screenTwo}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerTitle: 'Navigation Pages'}}
      drawerStyle={{
        width: 140,
        flex: 1,
      }}
      edgeWidth={0}
      drawerContent={props => (
        <SidebarMenu {...props} routeIndex={1} subRouteIndex={0} />
      )}>
      <Drawer.Screen name={'Home'} component={BottomTabNavigator} />
      <Drawer.Screen name={'drawerRoute'} component={Route} />
    </Drawer.Navigator>
  );
};

const Route = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={MainStackNavigator} />
      <Drawer.Screen name="Feed" component={screenThree} />
      <Drawer.Screen name="Help" component={screenFour} />
    </Stack.Navigator>
  );
};

export default MainNav;
