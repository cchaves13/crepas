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
                <Schedule></Schedule>
            </div>
            
        )
    }
}

export default Home
