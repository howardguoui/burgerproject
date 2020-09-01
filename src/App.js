import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import TodoList from './components/TodoList/todoList';
import Logout from './containers/Auth/Logout/Logout';

import * as actions from './store/actions/index';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const app = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(
    () => {
      onTryAutoSignup();
    },
    [onTryAutoSignup]
  );
  let routes = (
    <Switch>
      <Route path="/howardreact/auth" render={(props) => <Auth {...props} />} />
      <Route path="/howardreact/" exact component={BurgerBuilder} />
      <Route path="/howardreact/todo-list" exact component={TodoList} />
      <Redirect to="/howardreact/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route
          path="/howardreact/checkout"
          render={(props) => <Checkout {...props} />}
        />
        <Route
          path="/howardreact/orders"
          render={(props) => <Orders {...props} />}
        />
        <Route path="/howardreact/logout" component={Logout} />
        <Route
          path="/howardreact/auth"
          render={(props) => <Auth {...props} />}
        />
        <Route path="/howardreact/" exact component={BurgerBuilder} />
        <Route path="/howardreact/todo-list" exact component={BurgerBuilder} />
        <Redirect to="/howardreact/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(app)
);
