import React, {Component} from 'react'
import IngredientList from "./IngredientList"
import {externalApiCall} from "../services"

class DrinkItem extends Component{
    constructor(props){
        super(props);
        this.state={
            drink: null
        }
    }
    async componentWillMount(){
        const drink = await externalApiCall("drinkId", this.props.match.params.drinkId)
        this.setState({drink: drink[0]})

    }
    render(){
        const {drink} = this.state
        console.log(drink)
        const item = drink? (
            <div>
                <img src={drink.strDrinkThumb} alt={"image of " + drink.strDrink}/>
                <IngredientList drink={drink} />
                {drink.strDrink}
            </div>
        ): null
        return (
            <div>
                {item}
            </div>)
    }
}

export default DrinkItem;