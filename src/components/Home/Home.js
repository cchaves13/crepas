import React, { Component } from 'react'
import './home.css'
import Schedule from '../Schedule/Schedule';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div id="homePage">
                <h1>Este es tu super home page para crepas</h1>
                <Schedule></Schedule>
            </div>
            
        )
    }
}

export default Home
