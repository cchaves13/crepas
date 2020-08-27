import React, { Component } from 'react'
import './crepas.css'


class Crepas extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div  className="crepa">
                <div >
                    <img className="crepa-imgs" src={"/imgs/"+this.props.CrepasProps.Imagen+".jpg"}></img>
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
                        <button className="crepas-btn">Añadir al Pedido </button>
                    </div>

                </div>


            </div>
        )
    }



}

export default Crepas;