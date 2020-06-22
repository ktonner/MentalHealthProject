import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Prescriptions from './Pages/Prescriptions'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';


const App = () => (
  <Router>
    <Route exact path = '/' component={Home}/>
    <Route exact path='/enter' component={Prescriptions}/>
  </Router>
)

export default App;
