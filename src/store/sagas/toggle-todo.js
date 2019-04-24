import { call, put } from 'redux-saga/effects'
import { getTodos } from "../../api";
import { setTodos, fetchTodosFailed } from '../action-creators';

export default function* getTodosSaga(action) {
  try {
     const todos = yield call(getTodos);
     yield put(setTodos(todos));
  } catch (e) {
     yield put(fetchTodosFailed(e));
  }
}
