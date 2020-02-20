import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
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
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/burger/auth" component={asyncAuth} />
        <Route path="/burger" exact component={BurgerBuilder} />
        <Route path="/burger/hook" exact component={hookComponent} />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/burger/checkout" component={asyncCheckout} />
          <Route path="/burger/orders" component={asyncOrders} />
          <Route path="/burger/auth" component={asyncAuth} />
          <Route path="/burger/hook" exact component={hookComponent} />
          <Route path="/burger/logout" component={Logout} />
          <Route path="/burger" exact component={BurgerBuilder} />
        </Switch>
      );
    }

    return (
      <div>
        <Link to="/burger">Burger Project</Link>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};
// have to use withRouter
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
