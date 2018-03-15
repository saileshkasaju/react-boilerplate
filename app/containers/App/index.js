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
import HomePage from 'containers/HomePage/Loadable';
import ComingSoonPage from 'containers/ComingSoonPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GuestRoute from 'components/Routes/GuestRoute';
import UserRoute from 'components/Routes/UserRoute';
import LoginPage from '../LoginPage/Loadable';
import { makeSelectDialog, makeSelectLocation } from './selectors';

import saga from './saga';

const App = (props) => {
  const { location, dialog } = props;
  return (
    <div>
      <Helmet
        titleTemplate="%s - App"
        defaultTitle="App"
      >
        <meta name="description" content="application" />
      </Helmet>
      <Header />
      {dialog && dialog.size > 0 && dialog.toJS()}
      <Switch location={location}>
        <Route exact path="/" component={ComingSoonPage} />
        <Route exact path="/home" component={HomePage} />
        <GuestRoute exact location={location} path="/login" component={LoginPage} />
        <UserRoute location={location} path="/dashboard" component={ComingSoonPage} />
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
};

const mapStateToProps = createStructuredSelector({
  dialog: makeSelectDialog(),
  location: makeSelectLocation(),
});

const withSaga = injectSaga({ key: 'global', saga });
const withConnect = connect(mapStateToProps);

export default compose(
  withSaga,
  withConnect,
)(App);
