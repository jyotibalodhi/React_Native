import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Feed from './src/Screens/Feed';
import TabNav from './src/Navigation/TabNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
const App = () => {
  Ionicons.loadFont();
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default App;
