import React from 'react';
import Aux from '../../../hoc/Auxiliary';
const orderSumary = (props) => {
    const ingredientSumary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A burger sumary</p>
            <ul>
                {ingredientSumary}
            </ul>
            <p>Continue to check out? </p>
        </Aux>
    );
};

export default orderSumary