import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Component, admin, user, isLoggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (admin) return user.isAdmin ? <Component {...props} /> : <Redirect to="/404" />;
          return isLoggedIn ? <Component {...props} /> : <Redirect to="/authorization" />;
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(PrivateRoute);
