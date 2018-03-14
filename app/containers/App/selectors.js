import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectIsAuthenticated = () => createSelector(selectGlobal, state =>
  !!state.get('token')
);

export {
  makeSelectLocation,
  makeSelectIsAuthenticated,
};
