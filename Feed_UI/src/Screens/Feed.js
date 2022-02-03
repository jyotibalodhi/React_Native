import React from 'react';
import {ScrollView, View} from 'react-native';
import PostCard from '../Components/Post/PostCard';
import {posts} from '../Components/PostsData/Posts';

const FeedScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{marginBottom: 40}}>
      {posts.map((u, i) => {
        return (
          <View key={i}>
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
