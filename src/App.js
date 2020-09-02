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
      <Route
        path="/burgerproject/auth"
        render={(props) => <Auth {...props} />}
      />
      <Route path="/burgerproject/" exact component={BurgerBuilder} />
      <Route path="/burgerproject/todo-list" exact component={TodoList} />
      <Redirect to="/burgerproject/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route
          path="/burgerproject/checkout"
          render={(props) => <Checkout {...props} />}
        />
        <Route
          path="/burgerproject/orders"
          render={(props) => <Orders {...props} />}
        />
        <Route path="/burgerproject/logout" component={Logout} />
        <Route
          path="/burgerproject/auth"
          render={(props) => <Auth {...props} />}
        />
        <Route path="/burgerproject/" exact component={BurgerBuilder} />
        <Route
          path="/burgerproject/todo-list"
          exact
          component={BurgerBuilder}
        />
        <Redirect to="/burgerproject/" />
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
