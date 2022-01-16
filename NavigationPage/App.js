import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './src/Navigation/DrawerNav';
function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}

export default App;

/*





----------Drawer Navigation---------

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="Home"
          options={{drawerLabel: 'Home Screen'}}
          component={screenOne}
        />
        <Drawer.Screen
          name="Article"
          options={{drawerLabel: 'Article'}}
          component={screenTwo}
        />
        <Drawer.Screen
          name="Feed"
          options={{drawerLabel: 'Feed'}}
          component={screenThree}
        />
        <Drawer.Screen
          name="Settings"
          options={{drawerLabel: 'Settings'}}
          component={screenFour}
        />
        <Drawer.Screen
          name="Contact"
          options={{drawerLabel: 'Contact'}}
          component={screenFive}
        />

        <Drawer.Screen
          name="Help"
          options={{drawerLabel: 'Get Help'}}
          component={screenSix}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App; */
/*

----------Tab Navigation---------


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
*/
