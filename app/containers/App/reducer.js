/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import * as types from './constants';

// The initial state of the App
const initialState = fromJS({
  requesting: false,
  success: false,
  error: '',
  response: '',
  dialog: null,
  user: null,
  token: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DIALOG:
      return state.merge({ dialog: fromJS(action.dialog) });
    case types.SET_USER:
      return state.merge({ user: fromJS(action.user) });
    case types.SET_TOKEN:
      return state.merge({ token: action.token });
    case types.LOGOUT_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        error: '',
        response: '',
      });
    case types.LOGOUT_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        error: action.error.message,
      });
    case types.LOGOUT_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
      });
    default:
      return state;
  }
}

export default appReducer;
