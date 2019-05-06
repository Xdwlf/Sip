import React, {Component} from 'react'
import {connect} from "react-redux"
import {fetchDrinks} from "../store/actions/drinks"
import SideBarItem from "../components/SideBarItem"

class SideBar extends Component{
    constructor(props){
        super(props)
        this.state={
            redirect: false
        }
    }
    fetchDrinks= (searchType, searchData)=>{
        const {history, fetchDrinks} = this.props
        fetchDrinks(searchType, searchData)
        history.push("/search")
        
    }
    render(){
            //Random Drink, Search By Name, NonAlcoholic, Category, Glass
        //Category
            //Ordinary Drink, Cocktail, Milk/Float/Shake, Other/Unknown, Cocoa, Shot, Coffee/Tea
            //Homemade Liqueur, Punch / Party Drink, Beer, Soft Drink / Soda
        //Glass
            //Highball glass, Cocktail Glass, Old-fashioned Glass, Collins glass, Pousse cafe glass,
            //Champagne flute, Whiskey sour glass, brandy snifter, white wine glass, 
            //Nick and Nora glass, hurricane glass, coffee mug, shot glass, jar, irish coffee mug,
            //punch bowl, pitcher, pint glass, coffee mug, wine glass, cordial glass,
            //beer mug, margarita/coupette glass, beer pilsner, beer glass, parfait glass, 
            //mason jar, margarita glass, martini glass, balloon glass, coupe glass


            /**
            rectangular glass, 
                //highball glass, old-fashioned glass, collins glass, shot glass, pint glass, 
                beer pilsner, beer glass
            long-stemmed glass, 
                //wine glass, cocktail glass, Champagne flute, white wine glass, Nick and Nora glass, 
                margarita/coupette glass, margarita glass, martini glass, balloon glass, coupe glass
            short-stem glass, 
                Pousse cafe glass, Whiskey sour glass, brandy snifter, hurricane glass, 
                cordial glass, parfait glass
            mug, 
                coffee mug, irish coffee mug, beer mug
            jar, 
                jar, mason jar
            other
                punch bowl, pitcher
            
            
            */
        return(<div>
            <SideBarItem text="Random" searchType="random" fetchDrinks={this.fetchDrinks} />
            <SideBarItem text="Non-Alcoholic" searchType="filterNonalcoholic" fetchDrinks={this.fetchDrinks} />
            <div>Search</div>
            <div>Category</div>
            <div>Glass</div>
        </div>)
    }
}

export default connect(null, {fetchDrinks})(SideBar)