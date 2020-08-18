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
import Navigation from './components/General/Navigation/Navigation';
import Footer from './components/General/Footer/Footer';
import Confirmacion from './components/Confirmacion/Confirmacion';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navigation></Navigation>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/ordena">
          <Order></Order>
          </Route>

          <Route path="/otrapagina">
            <h1>Aqui ira otro componente</h1>
          </Route>
          
          <Route path="/confirmacion">
           <Confirmacion></Confirmacion>
          </Route>

          <Route path="/">
           <Home></Home>
          </Route>

        </Switch>
        <Footer></Footer>
      </div>
    </Router>
    )
  }
}


export default App;
