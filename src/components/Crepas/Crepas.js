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
                    <h2>Descripción</h2>
                        <div className="detalles">                            
                            <h5>Relleno:</h5>
                            <p>{this.props.CrepasProps.Relleno}</p>
                        </div>
                        <div className="detalles">                            
                            <h5>Frutas:</h5>
                            <p>{this.props.CrepasProps.Frutas}</p>
                        </div>
                        <div className="detalles">                            
                            <h5>Toppings:</h5>
                            <p>{this.props.CrepasProps.Toppings}</p>
                        </div>
                        <div className="detalles">                            
                            <h5>Precio:</h5>
                            <p>₡{this.props.CrepasProps.Precio}</p>
                        </div>          
                    </div>
                    <div id="boxBtn">
                        <button className="crepas-btn" onClick={this.togglePopup.bind(this)}>Añadir al Pedido </button>
                        {this.state.showPopup?
                        <Popup
                            text='Click "Close Button" to hide popup'closePopup={this.togglePopup.bind(this)}>
                        </Popup>: null}
                    </div>

                </div>


            </div>
        )
    }



}

export default Crepas;