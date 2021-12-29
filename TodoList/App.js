import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import InputField from './android/Components/InputField';
import Empty from './android/Components/Empty';
import TodoList from './android/Components/TodoList';

export default function App() {
  const [data, setData] = useState([]);

  const deleteItem = key => {
    setData(prevTodo => {
      return prevTodo.filter(todo => todo.key != key);
    });
  };

  const submitHandler = value => {
    setData(prevTodo => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  return (
    <View style={StyleView.main}>
      <View>
        <FlatList
          data={data}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TodoList item={item} deleteItem={deleteItem} />
          )}
        />
        <InputField submitHandler={submitHandler} />
      </View>
    </View>
  );
}

const StyleView = StyleSheet.create({
  main: {
    backgroundColor: 'midnightblue',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
