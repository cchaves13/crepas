import React, { Component } from 'react';
import "./Ingredientes.css"


class Ingredientes extends Component{
    constructor(props){
        super(props);

        this.state = {
             Ingrediente:{Nombre:"",Imagen:"", isChecked:false}    
        }
    }

    handleClick(){
        console.log(this);
    }

    componentDidMount(){
        this.setState({Ingrediente:this.props.Ingrediente});
    }

    // render(){
    //     return(
    //         <div className="contenedor-Ingrediente">
    //             <input id={"checkbox"+this.state.Ingrediente.Nombre} type="checkbox"  onClick={()=>{this.props.handleClick(this.state.Ingrediente, this.props.CantMax,  this.props.Tipo)}} checked={this.state.Ingrediente.isChecked} />
    //             <label htmlFor={"checkbox"+this.state.Ingrediente.Nombre}><img src={"/imgs/"+ this.state.Ingrediente.Nombre +".PNG"}/></label>
    //         </div>
    //     )
    // }

    render(){
        var divClasses = this.state.Ingrediente.isChecked ? "contenedor-Ingrediente checked" : "contenedor-Ingrediente";
        var pictureName = this.state.Ingrediente.Nombre.replace(/\s/g,'');
        console.log(pictureName);
        var backgroundImage = "/imgs/"+ pictureName +".PNG";

        return(
            <div className={divClasses} style={{backgroundImage: 'url(' + backgroundImage + ')'}} onClick={()=>{this.props.handleClick(this.state.Ingrediente, this.props.CantMax,  this.props.Tipo)}}>                
            </div>
        )
    }
}

export default Ingredientes;