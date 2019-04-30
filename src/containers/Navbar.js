import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Navbar extends Component{

    render(){
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
            </nav>
            
            </div>
        )
    }
}

export default Navbar; 