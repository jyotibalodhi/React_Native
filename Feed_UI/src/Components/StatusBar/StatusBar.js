import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import {posts} from '../PostsData/Posts';
import styles from './StatusStyle';

const StatusBar = () => {
  return (
    <ScrollView>
      <View style={styles.StatusBar}>
        {posts.map((u, i) => {
          return (
            <View key={i} style={styles.StatusItems}>
              <Image style={styles.Avatar} source={{uri: u.avatar}}></Image>
              <Text>{u.name}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default StatusBar;
