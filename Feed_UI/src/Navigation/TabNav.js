import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from '../Screens/MainScreen';
import PostsScreen from '../Screens/PostsScreen';
import SearchScreen from '../Screens/SearchScreen';
import FriendsScreen from '../Screens/FriendsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Friends') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTiǹtColor: 'gray',
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen
        name="Feed"
        component={Main}
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Icon name="camera-outline" size={25} style={{marginLeft: 15}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="create-outline" size={25} style={{marginRight: 15}} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Post" component={PostsScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
