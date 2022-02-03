import React from 'react';
import {View, ScrollView} from 'react-native';
import StatusBar from '../Components/StatusBar/StatusBar';
import FeedScreen from './Feed';
const Main = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar />
      <FeedScreen />
    </ScrollView>
  );
};

export default Main;
