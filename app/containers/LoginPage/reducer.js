/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  requesting: false,
  success: false,
  response: '',
  error: '',
});

function loginPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default loginPageReducer;
