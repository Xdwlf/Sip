import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"
import SearchPage from './SearchPage'
import Homepage from "./Homepage"
import SideBar from './SideBar'
import NotFound from "../components/NotFound"

class Main extends Component{
    render(){
        return (
            <div id="main">
                <div id="sidebar">
                    <SideBar />
                </div>
                <div id="content">
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/search" component={SearchPage}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
                
            </div>
            
        )
    }
}

export default Main