import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from './Navbar'
import Main from './Main'
import './style/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Router>
    
  );
}

export default App;
