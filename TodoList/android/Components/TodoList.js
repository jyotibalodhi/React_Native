import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoList({item, deleteItem}) {
  return (
    <View style={List.ComponentContainer}>
      <View style={List.ListContainer}>
        <View style={List.row}>
          <Text style={List.Text}>{item.value}</Text>
          <TouchableOpacity
            style={List.btn}
            onPress={() => deleteItem(item.key)}>
            <Icon name="trash" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const List = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  ComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
  },
  ListContainer: {
    backgroundColor: 'whitesmoke',
    height: 'auto',
    width: 350,
    marginTop: 30,
    borderRadius: 10,
  },
  Text: {
    color: 'black',
    width: 260,
    height: 'auto',
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
    fontFamily: 'poppins-regular',
    padding: 10,
  },
  btn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 50,
  },
});
