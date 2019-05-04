import React from 'react'

const IngredientList = ({drink}) => {
    let ingredients= [];
    let instructions = []
    for(let i = 1; i<16; i++){
        if(drink["strIngredient"+i]&&
            (drink["strMeasure"+1])&& 
            drink["strIngredient"+i].length>0
            ){
            ingredients.push(drink["strIngredient"+i]);
            instructions.push(drink["strMeasure"+1]);
        }

    }
    const ingredientDisplay = ingredients.map(( ing, idx) => (
        (<p key={idx+ing[0]}>
            {ing} {instructions[idx]}
        </p>)
    ))
    return (
        <div>
            {ingredientDisplay}
        </div>
    )
}

export default IngredientList