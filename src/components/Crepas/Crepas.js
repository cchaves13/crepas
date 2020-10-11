import React, { Component } from 'react'
import './crepas.css'
import Popup from './../Crepas/Popup/Popup';


class Crepas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPopup: false
        }
    }
    togglePopup() {  
        this.setState({ showPopup: !this.state.showPopup });  
    } 

    render() {
        const divStyle = {
            backgroundImage: 'url('+'/imgs/' + this.props.CrepasProps.Imagen +'.jpg'+ ')' };
        return (
            <div  className="crepa">
                
                <div style={divStyle} className="crepa-imgs" >
                   {/**<img className="crepa-imgs" src={"/imgs/"+this.props.CrepasProps.Imagen+".jpg"}></img> */} 
                </div>
                <div className="box-description">
                    <div id="crepaDescripcion">
                    <h1>{this.props.CrepasProps.Nombre}</h1>
                        <div className="detalles">                            
                            <h4>Relleno:</h4>&nbsp;&nbsp;
                            <h4>{this.props.CrepasProps.Relleno}</h4>
                        </div>
                        <div className="detalles">                            
                            <h4>Frutas:</h4>&nbsp;&nbsp;
                            <h4>{this.props.CrepasProps.Frutas}</h4>
                        </div>
                        <div className="detalles">                            
                            <h4>Toppings:</h4>&nbsp;&nbsp;
                            <h4>{this.props.CrepasProps.Toppings}</h4>
                        </div>
                        <div className="detalles">                            
                            <h4>Precio:</h4>&nbsp;&nbsp;
                            <h4>₡&nbsp;{this.props.CrepasProps.Precio}</h4>
                        </div>          
                    </div>
                    <div id="boxBtn">
                        <button className="crepas-btn" onClick={this.togglePopup.bind(this)}>Añadir al Pedido </button>
                        {this.state.showPopup?
                        <Popup
                            text='Cantidad de Crepas'closePopup={this.togglePopup.bind(this)}
                            crepa={this.props.CrepasProps}
                            >
                        </Popup>: null}
                    </div>

                </div>


            </div>
        )
    }



}

export default Crepas;