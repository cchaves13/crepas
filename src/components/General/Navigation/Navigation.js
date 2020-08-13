import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './Navigation.css';
import { Link  } from "react-router-dom";

class Navigation extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div id="navigationContainer">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/ordena">Ordenalo</Link>
                        </li>
                        <li>
                            <Link to="/otrapagina">OtraPagina</Link>
                        </li>
                        <li>
                            <Link to="/confirmacion">Confirmacion</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

}




export default Navigation;
