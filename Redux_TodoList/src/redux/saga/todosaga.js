function* addTodoSaga(action) {
  try {
    // some like api call or an any other func
    // yield put(onSucc(data));
  } catch (error) {
    console.log('error in login saga catch', error);
  }
}

export {addTodoSaga};
