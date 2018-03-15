/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const API_BASE = 'http://api-base:4000/api/';

export const SET_USER = 'app/App/SET_USER';
export const SET_TOKEN = 'app/App/SET_TOKEN';
export const SET_DIALOG = 'app/App/SET_DIALOG';

export const LOGOUT_REQUEST = 'app/App/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'app/App/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'app/App/LOGOUT_FAILURE';
