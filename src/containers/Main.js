import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"
import {connect} from 'react-redux'
import SearchPage from './SearchPage'
import Homepage from "./Homepage"
import SideBar from './SideBar'
import AuthForm from "../components/AuthForm"
import NotFound from "../components/NotFound"
import DrinkItem from "../components/DrinkItem"
import {signupUser, signinUser} from '../store/actions/auth'

class Main extends Component{
    render(){
        const {signinUser, signupUser} = this.props
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
                                        submitAction={signupUser}
                            />
                        }} />
                        <Route exac path="/signin" render={props=> {
                            return <AuthForm signUp={false} 
                                        btnText="Submit"
                                        header="Log In"
                                        submitAction={signinUser}
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

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps, {signupUser, signinUser})(Main)