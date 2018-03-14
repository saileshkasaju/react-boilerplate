/*
 *
 * LoginPage actions
 *
 */
import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const defaultActionRequest = action(types.DEFAULT_ACTION_REQUEST);
export const defaultActionSuccess = action(types.DEFAULT_ACTION_SUCCESS);
export const defaultActionFailure = action(types.DEFAULT_ACTION_FAILURE);
