import React, { Component } from 'react'
import './Alert.css'
export default class Alert extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {      
        let classList = this.props.visible ? "alert-container" : "alert-container hidden" ;
        return (            
            <div className={classList}>
                <h3>{this.props.message}</h3>
            </div>
        )
    }
}
