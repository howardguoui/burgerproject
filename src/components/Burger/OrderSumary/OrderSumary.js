import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
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
            <Button btnType="Danger" clicked= {props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked= {props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSumary