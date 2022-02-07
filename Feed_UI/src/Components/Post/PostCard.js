import {TouchableOpacity} from 'react-native-gesture-handler';
import React from 'react';
import {View, Image} from 'react-native';
import {Text, Card} from 'react-native-elements';
import styles from './CardStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LikeBtn from '../Buttons/LikeBtn';
import CommentBtn from '../Buttons/CommentBtn';
const PostCard = ({name, place, text, image, avatar}) => {
  return (
    <View>
      <Card style={styles.Post}>
        <View style={styles.CardTitle}>
          <View style={styles.Profile}>
            <Image style={styles.Avatar} source={{uri: avatar}}></Image>
            <Text style={styles.Name}>{name}</Text>
          </View>

          <Text style={styles.Place}>{place}</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical-outline" size={20} />
          </TouchableOpacity>
        </View>

        <Text style={{marginBottom: 10}}>{text}</Text>
        <Card.Image
          style={{height: 200, padding: 10, marginBottom: 10}}
          source={{
            uri: image,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <LikeBtn />
          <CommentBtn />
        </View>
      </Card>
    </View>
  );
};

export default PostCard;
