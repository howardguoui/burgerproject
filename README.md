# Summary

#### website: https://howardguoui.github.io/howardreact/

    following are my initial route. TODO: need to be change
        <Route path="/auth" component={asyncAuth} />
        <Route path="/howardreact" exact component={BurgerBuilder} />
        <Route path="/hook" exact component={hookComponent} />
        <Redirect to="/howardreact" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={Logout} />
          <Route path="/howardreact" exact component={BurgerBuilder} />
          <Redirect to="/howardreact" />



#### https://console.firebase.google.com/u/0/project/react-my-burger-21571/
#### npm install
#### npm start 
#### npm run deploy
