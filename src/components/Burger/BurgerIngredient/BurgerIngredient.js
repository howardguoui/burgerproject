import React from 'react';
import clases from './BurgerIngredient.css'
const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
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
export default burgerIngredient;