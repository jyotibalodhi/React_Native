import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import InputField from '../components/inputFiled/InputField';
import Empty from '../components/emptyComponent/Empty';
import TodoList from '../components/todoList/TodoList';
import StyleView from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo, editTodo} from '../redux/actions/actions';

const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.todoReducers.list);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setData(list);
    console.log(list);
    return () => {
      null;
    };
  }, [list]);

  const deleteItem = id => {
    try {
      dispatch(deleteTodo({key: id}));
      // setData(prevTodo => {
      //   return prevTodo.filter(todo => todo.id != id);
      // console.log(list, 'Upd list');
      // });
    } catch (error) {
      console.log('Error in deleteItem ===>>>', error);
    }
  };

  const editItem = (item, index) => {
    try {
      setInputValue(item.value);
      setSelectedIndex(index);
    } catch (error) {
      console.log('Error in editItem ===>>>', error);
    }
  };

  const submitHandler = value => {
    try {
      dispatch(
        addTodo({
          value: value,
          key: Math.random().toString(),
        }),
      );
      setInputValue('');
      // console.log(list);

      // setData(prevTodo => {
      //   return [
      //     ...prevTodo,
      // {
      //   value: value,
      //   key: Math.random().toString(),
      // },
      //   ];
      // });
    } catch (error) {
      console.log('Error in submitHandler ===>>>', error);
    }
  };

  const editHandler = value => {
    try {
      console.log('Inside edit handler\n\n');
      console.log(value, ' Value...\n\n');
      // data[selectedIndex].value = value;
      dispatch(
        editTodo({
          value: value,
          index: selectedIndex,
        }),
      );
      // console.log(data, ' Data...');
      // setData(data);
      setInputValue('');
    } catch (error) {
      console.log('Error in editHandler ===>>>', error);
    }
  };

  return (
    <View style={StyleView.main}>
      <View>
        <FlatList
          data={data}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => (
            <TodoList
              item={item}
              deleteItem={deleteItem}
              editItem={() => editItem(item, index)}
            />
          )}
        />
        <InputField
          inputValue={inputValue}
          submitHandler={submitHandler}
          editHandler={editHandler}
        />
      </View>
    </View>
  );
};

export default Main;
