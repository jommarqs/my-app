import { all, takeLatest } from 'redux-saga/effects';

import * as ACTION_TYPES from '../action-types';
import getTodosSaga from './toggle-todo';

export default function* rootSaga() {
  yield all([
    // takeEvery(ACTION_TYPES.TOGGLE_TODO, handleGetDownloadLink),
    takeLatest(ACTION_TYPES.FETCH_TODOS, getTodosSaga)
  ]);
}