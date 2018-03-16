/**
 *
 * AdminDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button } from 'semantic-ui-react';
import Toaster from 'components/Toaster';
import {
  makeSelectRequesting, makeSelectError,
} from 'containers/App/selectors';
import messages from './messages';
import { logoutRequest } from '../App/actions';
import Routes from './Routes';

const AdminDashboard = (props) => {
  const { logout, isRequesting, errorResponse } = props;
  let message;
  if (errorResponse) {
    message = <Toaster message={errorResponse} error timeout={5000} />;
  }
  return (
    <div>
      <FormattedMessage {...messages.header} />
      {message}
      <Button onClick={logout} loading={isRequesting} disabled={isRequesting}>
        Logout
      </Button>
      <Routes />
    </div>
  );
};

AdminDashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  errorResponse: makeSelectError(),
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutRequest()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(AdminDashboard);
