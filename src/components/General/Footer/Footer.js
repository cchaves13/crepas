import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './Footer.css';
class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div id="FooterContainer">
                <h1>This is the Footer Component Hola</h1>
            </div>
        );
    }

}




export default Footer;
