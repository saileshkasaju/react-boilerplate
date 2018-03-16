import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';

import ComingSoonPage from 'containers/ComingSoonPage';

const AdminRoutes = (props) => {
  const { location } = props;
  return (
    <Switch location={location}>
      <Route exact path="/dashboard/page-1" component={ComingSoonPage} />
      <Route exact path="/dashboard/page-2" component={ComingSoonPage} />
      <Route exact path="/dashboard" component={ComingSoonPage} />
      <Redirect from="*" to="/dashboard" />
    </Switch>
  );
};

AdminRoutes.propTypes = {
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(mapStateToProps)(AdminRoutes);
