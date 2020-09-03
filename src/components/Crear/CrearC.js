import React, { Component } from 'react';
import "./CrearC.css"


class CrearC extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className='prueba' >
        <img className="relleno" src= "./imgs/Rfondo.jpg"/> 
           <input className="nutella" type="checkbox" name="Relleno" value="Nutella"></input>
           <label className="txtnutella"> Nutella</label>

           <input className="condensada" type="checkbox" name="Relleno" value="Condensada"></input>
           <label className="txtcondensada"> Condensada</label>

           <input className="arandano" type="checkbox" name="Relleno" value="Arandano"></input>
           <label className="txtarandano"> Mermelada Arándono</label>

           <input className="Mfresa" type="checkbox" name="Relleno" value="Fresa"></input>
           <label className="txtfresa"> Mermelada Fresa</label>
           
          
        </div>   
            
        )
    }
}

export default CrearC;