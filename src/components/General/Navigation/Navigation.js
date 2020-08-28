import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './Navigation.css';
import { Link  } from "react-router-dom";
/***/
import './Navigation.css'
import { navegation } from './Links'

class Navigation extends Component{

    constructor(props){
        super(props);
        this.state = {
            isSidebarOpen: false
        }
    }

    handleMenuButtonClick=()=>{
        this.setState({isSidebarOpen:! this.state.isSidebarOpen})
    };

    render() {
        /*console.warn('state', this.state);*//* Esto sirve para ver la consola*/ 
        const{isSidebarOpen}=this.state;
        
        return (
            <div className="container">
                  
          <div className="menu-button" onClick={this.handleMenuButtonClick}>
              <i className="fas fa-bars"></i>
           </div>  
           {/*Sidebar*/} 
           <a href="/"><img className="imagen" src="imagenes/logo2.jpeg"></img></a>
           
           { navegation.length &&(
               <nav className={`nav ${isSidebarOpen ? 'show':''}` }>
                   <ul className="menu-items"> 
                   
                    {navegation.map(  item => (
                        <li className="menu-list" key={item.label}> 
                            <a className="menu-link" href={item.url}>{item.label}</a>
                        </li>
                        
                        
                    ))}
                    </ul>
                </nav>
           )}
            </div>
        )
    }

}




export default Navigation;
