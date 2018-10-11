import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clases from './BurgerIngredient.css'
class BurgerIngredient extends Component {
    render() {
        
            let ingredient = null;
            switch (this.props.type) {
                case('bread-bottom'):
                    ingredient = <div className={clases.BreadBottom}></div>
                    break;
                case('bread-top'):
                    ingredient = (
                        <div className={clases.BreadTop}>
                     <div className={clases.Seeds1}>
                    
                    </div>
                    <div className={clases.Seeds2}>
                    
                    </div>
                    </div>
                    )
                    break;
                case('meat'):
                    ingredient = <div className={clases.Meat}></div>
                    break;
                case('Cheese'):
                    ingredient = <div className={clases.Cheese}></div>
                    break;
                case('Salad'):
                    ingredient = <div className={clases.Salad}></div>
                    break;
                case('Bacon'):
                    ingredient = <div className={clases.Bacon}></div>
                    break;
                default: 
                ingredient = null;
            }
            return ingredient;
        }
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredient;