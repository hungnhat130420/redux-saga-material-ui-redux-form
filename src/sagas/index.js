import { fork, take, call, put, delay } from "redux-saga/effects";
import * as taskTypes from "./../constant/task";
import { getList } from "./../apis/task";
import { STATUS_CODE } from "./../constant/index";
import { fetchListTaskFailed, fetchListTaskSuccess } from "../actions/task";
import {showLoading,hideLoading} from './../actions/ui'

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
      
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  console.log("watching create task action");
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
