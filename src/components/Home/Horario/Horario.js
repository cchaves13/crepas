import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './Horario.css';
class Horario extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    
    render(){
        return (
            <div id="horarioContainer">
                <h1>This is the Horario Component</h1>
            </div>
        );
    }

}




export default Horario;
