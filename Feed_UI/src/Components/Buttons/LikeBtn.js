import React from 'react';
import {TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useState} from 'react';
import styles from './ButtonStyle';

const LikeBtn = () => {
  var [isPress, setIsPress] = useState(false);
  var btnColor = isPress ? styles.likeBtnActive : styles.likeBtnNormal;

  const btnPressed = () => {
    if (isPress) {
      setIsPress(false);
      btnColor = styles.likeBtnActive;
    } else {
      setIsPress(true);
      btnColor = styles.likeBtnNormal;
    }
  };

  return (
    <TouchableHighlight onPress={btnPressed}>
      <Icon style={btnColor} name="heart" size={25} />
    </TouchableHighlight>
  );
};

export default LikeBtn;
