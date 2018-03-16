/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import Toaster from 'components/Toaster';
import HomePage from 'containers/HomePage/Loadable';
import AdminDashboardPage from 'containers/AdminDashboard';
import ComingSoonPage from 'containers/ComingSoonPage';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GuestRoute from 'components/Routes/GuestRoute';
import UserRoute from 'components/Routes/UserRoute';
import LoginPage from '../LoginPage/Loadable';
import {
  makeSelectDialog, makeSelectLocation, makeSelectError, makeSelectResponse,
} from './selectors';

import saga from './saga';

const App = (props) => {
  let message;
  const { location, dialog, errorResponse, successResponse } = props;
  if (successResponse) {
    message = <Toaster message={successResponse} success />;
  }
  if (errorResponse) {
    message = <Toaster message={errorResponse} error />;
  }
  return (
    <div>
      <Helmet
        titleTemplate="%s - App"
        defaultTitle="App"
      >
        <meta name="description" content="application" />
      </Helmet>
      <Header />
      {message}
      {dialog && dialog.size > 0 && dialog.toJS()}
      <Switch location={location}>
        <Route exact path="/" component={ComingSoonPage} />
        <Route exact path="/home" component={HomePage} />
        <GuestRoute exact location={location} path="/login" component={LoginPage} />
        <UserRoute location={location} path="/dashboard" component={AdminDashboardPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
  dialog: PropTypes.object,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dialog: makeSelectDialog(),
  location: makeSelectLocation(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const withSaga = injectSaga({ key: 'global', saga });
const withConnect = connect(mapStateToProps);

export default compose(
  withSaga,
  withConnect,
)(App);
