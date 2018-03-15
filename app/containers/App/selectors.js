import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectGlobal = (state) => state.get('global');

const makeSelectLocation = () => createSelector(selectRoute, (state) =>
  state.get('location').toJS()
);

const makeSelectIsAuthenticated = () => createSelector(selectGlobal, (state) =>
  !!state.get('token')
);

export {
  makeSelectLocation,
  makeSelectIsAuthenticated,
};
