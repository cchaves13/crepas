import React, { Component } from 'react'
import './home.css'
import Schedule from '../Schedule/Schedule';
import Slideshow from './Slideshow/Slideshow';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div id="homePage">
                <Slideshow></Slideshow>
                <Schedule></Schedule>
            </div>
            
        )
    }
}

export default Home
