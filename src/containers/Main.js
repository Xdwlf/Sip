import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"
import SearchPage from './SearchPage'
import Homepage from "./Homepage"
import NotFound from "../components/NotFound"

class Main extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Main