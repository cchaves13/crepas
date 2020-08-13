import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './Slideshow.css';
class Slideshow extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div id="slideshowContainer">
                <h1>This is the slide show Component</h1>
            </div>
        );
    }

}




export default Slideshow;
