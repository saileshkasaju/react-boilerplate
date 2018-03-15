/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Grid, Header, Form, Segment, Input, Button,
} from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    data: {},
    errors: {},
  };
  handleChange = (e, { name, value }) => {
    this.setState((state) => ({
      data: {
        ...state.data,
        [name]: value,
      },
    }));
  };
  validate = () => {
    const errors = {};
    return errors;
  };
  handleSubmit = () => {
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      //
    }
  };
  render() {
    return (
      <Grid className="middle aligned" centered>
        <Grid.Column>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Field>
                <Input
                  name="username" icon="user" iconPosition="left"
                  placeholder="E-mail address" onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  name="password" icon="lock" iconPosition="left"
                  placeholder="Password" type="password" onChange={this.handleChange}
                />
              </Form.Field>
              <Button size="large" color="teal" fluid type="submit">Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

LoginPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const mapDispatchToProps = (dispatch) => ({ // eslint-disable-line

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
