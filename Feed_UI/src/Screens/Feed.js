import React from 'react';
import {ScrollView, View} from 'react-native';
import PostCard from '../Components/Post/PostCard';
import {posts} from '../Components/FeedData/PostsData';

const FeedScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{marginBottom: 40}}>
      {posts.map((u, key) => {
        return (
          <View key={key}>
            <PostCard
              name={u.name}
              avatar={u.avatar}
              place={u.place}
              image={u.image}
              text={u.text}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default FeedScreen;
