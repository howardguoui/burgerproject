import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/burgerproject" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/burgerproject/todo-list" exact>
      TODO List
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/burgerproject/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/burgerproject/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/burgerproject/logout">Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
