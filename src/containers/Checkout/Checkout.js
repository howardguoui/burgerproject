// import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
// import ContactData from './ContactData/ContactData';

// class Checkout extends Component {
//   // state = {
//   //     ingredients: null,
//   //     totalPrice: 0
//   // }
//   // componentWillMount() {
//   //     const query = new URLSearchParams(this.props.location.search);
//   //     const ingredients = {};
//   //     let price = 0;
//   //     for (let param of query.entries()) {
//   //         // ['salad', '1']
//   //         if (param[0] === 'price') {
//   //             price = param[1];
//   //         } else {
//   //             ingredients[param[0]] = param[1];
//   //         }
//   //     }
//   //     console.log(price);
//   //     console.log(ingredients);
//   //     this.setState({ingredients:ingredients, totalPrice: price});
//   // }
//   checkoutCancelledHandler = () => {
//     this.props.history.goBack();
//   };
//   checkoutContinuedHandler = () => {
//     this.props.history.replace('/burgerproject/checkout/contact-data');
//   };
//   // render() {
//   //     return (
//   //         <div>
//   //             <CheckoutSummary
//   //             ingredients={this.state.ingredients}
//   //             checkoutCancelled={this.checkoutCancelledHandler}
//   //             checkoutContinued={this.checkoutContinuedHandler}
//   //             />
//   //             <Route
//   //             path={this.props.match.path + '/contact-data'}
//   //             // component={ContactData}
//   //             render={(props) => (<ContactData
//   //                 ingredients={this.state.ingredients}
//   //                 price={this.state.totalPrice}
//   //                 {...props} />)}
//   //             />
//   //         </div>
//   //     );
//   // }
//   render() {
//     //this.props.purchased has a problem after purchase success and order again it will redirect to main page
//     let summary = <Redirect to="/burgerproject" />;
//     if (this.props.ings) {
//       const purchasedRedirect = this.props.purchased ? (
//         <Redirect to="/burgerproject" />
//       ) : null;
//       summary = (
//         <div>
//           {purchasedRedirect}
//           <CheckoutSummary
//             ingredients={this.props.ings}
//             checkoutCancelled={this.checkoutCancelledHandler}
//             checkoutContinued={this.checkoutContinuedHandler}
//           />
//           <Route
//             path={this.props.match.path + '/contact-data'}
//             component={ContactData}
//           />
//         </div>
//       );
//     }
//     return summary;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     // ings: state.ingredients
//     ings: state.burgerBuilder.ingredients,
//     purchased: state.order.purchased,
//   };
// };

// export default connect(mapStateToProps)(Checkout);
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/burgerproject/checkout/contact-data');
  };

  let summary = <Redirect to="/burgerproject" />;
  if (props.ings) {
    const purchasedRedirect = props.purchased ? (
      <Redirect to="/burgerproject" />
    ) : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    );
  }
  return summary;
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(checkout);
