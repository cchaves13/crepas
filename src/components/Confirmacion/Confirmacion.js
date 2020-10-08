import React, { Component } from 'react';
import './Confirmacion.css'

class Confirmacion extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <h1>Confirma tu pedido</h1>
            <h2>Detalle de tu pedido</h2>
            <div className="table-detalle">
            <table>
                <tr>
                    <th>Cantidad</th>
                    <th>Descripción de tu pedido</th>
                    <th>Eliminar</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Crepa creada 1 (caramelo, fresa, banano, kiwi, coco, caramelo)</td>
                    <td>x</td>
                    <td>$4</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>TOTAL</td>
                    <td>$4</td>
                </tr>
            </table>
            </div>
        </div>       
        )
    }
}

export default Confirmacion;