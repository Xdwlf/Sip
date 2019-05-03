import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"
import SearchPage from './SearchPage'
import Homepage from "./Homepage"
import SideBar from './SideBar'
import AuthForm from "../components/AuthForm"
import NotFound from "../components/NotFound"
import DrinkItem from "../components/DrinkItem"

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
                        <Route exac path="/signup" render={props=> {
                            return <AuthForm signUp={true} 
                                        btnText="Sign Up Today!"
                                        header="Create a New Account"
                            />
                        }} />
                        <Route exac path="/signin" render={props=> {
                            return <AuthForm signUp={false} 
                                        btnText="Submit"
                                        header="Log In"
                            
                            />
                        }} />
                        <Route path="/drinks/:drinkId" component={DrinkItem} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                
            </div>
            
        )
    }
}

export default Main