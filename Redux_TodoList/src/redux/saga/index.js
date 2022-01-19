import takeEvery from 'redux-saga';
import {addTodoSaga} from './todosaga';
function* rootSaga() {
  yield takeEvery('ADD_TODO', addTodoSaga);
}

export default rootSaga;
