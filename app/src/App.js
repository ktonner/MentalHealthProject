import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Prescriptions from './Pages/Prescriptions'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import { UserProvider } from "./utils/UserContext";

const App = () => (
  <Router>
    <Route exact path = '/' component={Home}/>
    <Route exact path='/enter' component={Prescriptions}/>
  </Router>
)

export default App;
