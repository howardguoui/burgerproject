import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log();
            return [...Array(props.ingredients[igKey])].map((_, i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }).reduce((arr, el) =>{
            return arr.concat(el)
        }, []);
    // 1].Object.keys(props.ingredients) 
    // [salad, bacon, meat, cheese].      
    // 2] map(igKey => { return. }) 
    // Will iterate through each key 
    // 3]. e.g igKey = salad.   (salad: 2) 
    // return [...Array(props.ingredients[igKey])] 
    // 4]. map((_, i) => { 
    // return <BurgerIngredient key={igKey + i} type={igKey} />; 
    // }) 
    // This will map the array of [undefined, undefined] will just need index  
    // e.g. For salad it will iterate 2 times and return 
    // <BurgerIngredient key=”salad0” type=”salad” /> 
    // <BurgerIngredient key=”salad1” type=”salad” 

          /*
  Declare an ingredients array that will hold the BurgerIngredient
  components.
  */
//   let ingredients = [];
 
//   // Loop through every key in the props.ingredients object
//   for (const ingKey in props.ingredients) {
//     /*
//     For every key, use a for loop that iterates as many times as the value
//     contained in each key. For every iteration, add a BurgerIngredient to the
//     ingredients array.
//     */
//     for (let i = 0; i < props.ingredients[ingKey]; i++) {
//       ingredients.push(<BurgerIngredient key={ingKey + i} type={ingKey} />);
//     }
//   }
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default burger;