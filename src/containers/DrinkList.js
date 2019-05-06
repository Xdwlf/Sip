import React, {Component} from 'react'
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link} from "react-router-dom"


class DrinkList extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: 0
        }
    }

    static propTypes = {
        drinks: PropTypes.arrayOf(PropTypes.shape({
            idDrink: PropTypes.string.isRequired,
            strDrink: PropTypes.string.isRequired,
            strInstructions: PropTypes.string.isRequired,
            strDrinkThumb: PropTypes.string.isRequired
        }))
    }

    static defaultProps = {
        drinks: []
    }

    render(){
        const drinks= this.props.drinks.map(drink=>(
            <Link to={'/drinks/'+drink.idDrink} key={drink.idDrink}>
                <div className="card" >
                    <img className="card-img-top" src={drink.strDrinkThumb} alt={drink.strDrink+" image"}/>
                    <div className="card-body">
                        <p className="card-text">
                            {drink.strDrink}
                        </p>
                    </div>
                </div>
            </Link>
        ))
        let tabs = []
        const numPages = Math.floor(drinks.length/20) + 1; 
        for(let i= 1; i<= numPages; i++){
            tabs.push(<div>{i}</div>)
        }
        
        return (
            <section>
                <h1>Drinks</h1>
                        {(drinks.length)? (
                            <div id="drink-list">
                                {drinks}
                            </div>
                        ): "No Beverages Found" }
                <div>{tabs}</div>
            </section>
        )
    }
}

function mapStateToProps(reduxState){
    return {
        drinks: reduxState.drinks.drinkList
    }
}

export default connect(mapStateToProps)(DrinkList)