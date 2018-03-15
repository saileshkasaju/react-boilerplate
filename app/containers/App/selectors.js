import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectGlobal = (state) => state.get('global');

const makeSelectLocation = () => createSelector(selectRoute, (state) =>
  state.get('location').toJS()
);
const makeSelectIsAuthenticated = () => createSelector(selectGlobal, (state) =>
  !!state.get('token')
);
const makeSelectToken = () => createSelector(selectGlobal, (state) =>
  state.get('token')
);
const makeSelectDialog = () => createSelector(selectGlobal, (state) =>
  state.get('dialog')
);

export {
  makeSelectLocation,
  makeSelectIsAuthenticated,
  makeSelectToken,
  makeSelectDialog,
};
