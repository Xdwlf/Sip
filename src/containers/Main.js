import React, {Component} from 'react'
import {Switch, Route, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import SearchPage from './SearchPage'
import Homepage from "./Homepage"
import SideBar from './SideBar'
import AuthForm from "../components/AuthForm"
import NotFound from "../components/NotFound"
import DrinkItem from "./DrinkItem"
import PopUp from "../components/PopUp"
import {signupUser, signinUser} from '../store/actions/auth'
import {removeNotification} from '../store/actions/notifications'
import {loadComments} from "../store/actions/comments"
import {removeError} from '../store/actions/errors'


class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {signinUser, signupUser, notification, error, removeNotification, removeError, history} = this.props
        return (
            <div id="main">
                <div id="sidebar">
                    <SideBar />
                </div>
                <div id="content">
                    <PopUp type="notification" text={notification} removePopUp={removeNotification} />
                    <PopUp type="error" text={error} removePopUp={removeError} />
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/search" component={SearchPage}/>
                        <Route exac path="/signup" render={props=> {
                            return <AuthForm signUp={true} 
                                        btnText="Sign Up Today!"
                                        header="Create a New Account"
                                        submitAction={signupUser}
                                        history={history}
                            />
                        }} />
                        <Route exac path="/signin" render={props=> {
                            return <AuthForm signUp={false} 
                                        btnText="Submit"
                                        header="Log In"
                                        submitAction={signinUser}
                                        history={history}
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

function mapStateToProps(state){
    const {notification, error} = state
    return {
        notification,
        error
    }
}

export default withRouter(connect(mapStateToProps, {signupUser, signinUser, removeNotification, removeError, loadComments})(Main))