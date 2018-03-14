import { take, takeLatest, call, fork, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from "react-router-redux";
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/Api';

function* redirectOnSuccess() {
  const action = yield take([types.DEFAULT_ACTION]);
  // executed on successful action
  // yield put(push("/next-route"));
}

function* defaultActionService() {
  const token = localStorage.getItem("token");
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Api.post(
      `api/some-api-url`,
      actions.defaultActionSuccess,
      actions.defaultActionFailure,
      {some: 'data'},
      token
    )
  );
  yield take([LOCATION_CHANGE, types.DEFAULT_ACTION_FAILURE]);
  yield cancel(successWatcher);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(types.DEFAULT_ACTION_REQUEST, defaultActionService);
}
