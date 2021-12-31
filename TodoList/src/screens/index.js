import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import InputField from '../components/inputFiled/InputField';
import Empty from '../components/emptyComponent/Empty';
import TodoList from '../components/todoList/TodoList';
import StyleView from './styles';

const Main = () => {
  const [data, setData] = useState([]);

  const deleteItem = key => {
    setData(prevTodo => {
      return prevTodo.filter(todo => todo.key != key);
    });
  };

  // const editItem = key => {
  //
  // };

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
            <TodoList
              item={item}
              deleteItem={deleteItem}
              /*editItem={editItem}*/
            />
          )}
        />
        <InputField submitHandler={submitHandler} />
      </View>
    </View>
  );
};

export default Main;
