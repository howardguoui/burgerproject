import React, { Component } from 'react';

import classes from './Layout.css';

class Layout extends Component {

    render () {
        return (
            <React.Fragment>

                <div className={classes.Content}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}


export default Layout;

// import React from 'react';
// const layout = ( props ) => {
//     <React.Fragment>
//     <Toolbar
//      isAuth={this.props.isAuthenticated}
//     drawerToggleClicked={this.sideDrawerToggleHandler} />
//     <SideDrawer
//         isAuth={this.props.isAuthenticated}
//         open={this.state.showSideDrawer}
//         closed={this.sideDrawerClosedHandler} />
//     <main className={classes.Content}>
//         {this.props.children}
//     </main>
// </React.Fragment>
// }
// export default layout
