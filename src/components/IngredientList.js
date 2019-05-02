import React from 'react'

const IngredientList = ({drink}) => {
    let ingredients= [];
    for(let i = 1; i<16; i++){
        if(drink["strIngredient"+i].length>0){
            ingredients.push(drink["strIngredient"+i]);
        }
    }
    const ingredientDisplay = ingredients.map(( ing, idx) => (
        (<p key={idx+ing[0]}>
            {ing}
        </p>)
    ))
    return (
        <div>
            {ingredientDisplay}
        </div>
    )
}

export default IngredientList