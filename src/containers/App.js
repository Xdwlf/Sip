import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom"
import {configureStore} from '../store'
import {setCurrentUser} from '../store/actions/auth'
import jwtDecode from "jwt-decode"
import Navbar from './Navbar'
import Main from './Main'
import './style/App.css';

const store = configureStore()

let token = localStorage.jwtToken

if(token){
  try {
    const decoded = jwtDecode(token)
    store.dispatch(setCurrentUser(decoded))
  } catch(e){
    store.dispatch(setCurrentUser({}))
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
