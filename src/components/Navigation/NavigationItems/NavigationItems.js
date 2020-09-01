import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/howardreact" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/howardreact/todo-list" exact>
      TODO List
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/howardreact/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/howardreact/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/howardreact/logout">Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
