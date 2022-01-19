const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  console.log('type', action.type);

  switch (action.type) {
    case 'ADD_TODO':
      const data = action.payload;
      const newList = [...state.list, data];
      return {...state, list: newList};

    case 'DELETE_TODO':
      // console.log(action.key, 'Action key \n');
      const {key} = action.key;
      // console.log(key, ' Key Value');
      const updList = state.list.filter(todo => todo.key != key);
      return {
        ...state,
        list: updList,
      };

    case 'EDIT_TODO':
      const {value, index} = action.payload;
      const tempList = state.list;
      tempList[index].value = value;
      // console.log(tempList, 'TempList....');

      return {
        ...state,
        list: tempList,
      };
    default:
      return state;
  }
};

export default todoReducers;
