import 'react-native-gesture-handler';
import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {story} from '../FeedData/StoriesData';
import styles from './StatusStyle';
import {useNavigation} from '@react-navigation/native';

const StatusBar = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      style={{backgroundColor: 'white'}}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{margin: 10}}>
      {story.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                avatar: data.avatar,
                image: data.image,
                place: data.place,
              })
            }>
            <View style={styles.StatusItem}>
              <Image style={styles.Avatar} source={{uri: data.avatar}}></Image>
            </View>
            <Text style={{alignSelf: 'center'}}>{data.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default StatusBar;
