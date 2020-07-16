import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import hookComponent from './components/Hook/hook';
const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/howardreact/auth" component={asyncAuth} />
        <Route path="/howardreact" exact component={BurgerBuilder} />
        <Route path="/howardreact/hook" exact component={hookComponent} />
        <Redirect to="/howardreact" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/howardreact/checkout" component={asyncCheckout} />
          <Route path="/howardreact/orders" component={asyncOrders} />
          <Route path="/howardreact/auth" component={asyncAuth} />
          <Route path="/howardreact/logout" component={Logout} />
          <Route path="/howardreact" exact component={BurgerBuilder} />
          <Redirect to="/howardreact" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
// have to use withRouter
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
