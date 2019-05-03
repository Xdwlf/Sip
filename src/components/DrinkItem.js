import React, {Component} from 'react'
import IngredientList from "./IngredientList"
import Instructions from "./Instructions.js"
import ShowHidePackage from "./ShowHidePackage"
import {externalApiCall} from "../services"

class DrinkItem extends Component{
    constructor(props){
        super(props);
        this.state={
            drink: null,
            showIngredients: false,
            showInstructions: false
        }
    }
    async componentWillMount(){
        const drink = await externalApiCall("drinkId", this.props.match.params.drinkId)
        this.setState({drink: drink[0]})

    }
    render(){
        const {drink} = this.state
        const item = drink? (
            <div>
                <img src={drink.strDrinkThumb} alt={"image of " + drink.strDrink}/>
                <div>
                    <h2>
                        {drink.strDrink}
                    </h2>
                    <h4>{drink.strAlcoholic}</h4>
                    <p>Best served in a {drink.strGlass}</p>
                    <p></p>
                </div>
                <ShowHidePackage text="Ingredients">
                    <IngredientList drink={drink} />
                </ ShowHidePackage>
                <ShowHidePackage text="Instructions">
                    <Instructions drink={drink} />
                </ShowHidePackage>
            </div>
        ): null
        return (
            <div>
                {item}
            </div>)
    }
}

export default DrinkItem;