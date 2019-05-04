import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../store/actions/auth'

class Navbar extends Component{

    render(){
        const {currentUser, logoutUser} = this.props;
        return (
            <div>
            <nav id="nav-bar" className="navbar navbar-light navbar-expand-lg bg-light">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">
                                Search
                            </NavLink>
                        </li>
                    </ul>
                    {(!currentUser.hasOwnProperty("username"))? 
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin">
                                    Log in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">
                                    Sign up
                                </NavLink>
                            </li>
                        </ul>
                    :
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={logoutUser} to="/">
                                Log Out
                            </NavLink>
                        </li>
                    </ul>
                }

                    
            </nav>
            
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {logoutUser})(Navbar); 