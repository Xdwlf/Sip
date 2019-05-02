import React, {Component} from 'react'
import "../components/SearchBar"
import SearchBar from '../components/SearchBar';
import DrinkList from './DrinkList';
import {fetchDrinks} from "../store/actions/drinks";
import {connect} from 'react-redux'

class SearchPage extends Component{

    fetchDrinks = (type, data) =>{
        this.props.fetchDrinks(type, data)
    }
    render(){
        return (
            <div>
                <SearchBar fetchDrinks={this.fetchDrinks} />
                <DrinkList />
            </div>
        )
    }
}

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps, {fetchDrinks})(SearchPage)