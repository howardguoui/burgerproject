import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/burger" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/burger/hook" exact>Hook</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/burger/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/burger/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/burger/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;