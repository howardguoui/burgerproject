import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 1.5,
    meat: 3,
    bacon: 2
}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            //key value pair
            salad : 1,
            bacon : 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 10
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }
    render() {
        return (
            <Aux>
                <Burger ingredients= {this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                />
            </Aux>
        );
    }
}
export default BurgerBuilder;