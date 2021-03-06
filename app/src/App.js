import React from 'react';
import './App.css';
import { DBConfig } from './components/IndexDB/script';
import { initDB } from 'react-indexed-db';
import Home from './Pages/Home'
import Prescriptions from './Pages/Prescriptions'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Container from 'react-bootstrap/Container'

initDB(DBConfig);

const App = () => (
  <div>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/enter' component={Prescriptions} />
    </Switch>
    </Router>
  </div>
)

export default App;
