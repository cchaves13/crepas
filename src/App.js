import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Order/Order';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/ordena">Ordena</Link>
            </li>
            <li>
              <Link to="/otrapagina">OtraPagina</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ordena">
          <Order></Order>
          </Route>         
          <Route path="/otrapagina">
            <h1>Aqui ira otro componente</h1>
          </Route>
          <Route path="/">
           <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}


export default App;
