import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ButtonStyle';
const CommentBtn = () => {
  return (
    <Pressable>
      {({pressed}) => (
        <Icon
          name="chatbubble-outline"
          style={[pressed ? styles.CommentBtnActive : styles.CommentBtnNormal]}
          size={22}></Icon>
      )}
    </Pressable>
  );
};

export default CommentBtn;
