import React, { Component } from 'react';
import Alert from '../Alert/Alert';
import './Confirmacion.css'

class Confirmacion extends Component{

    constructor(props){
        super(props);
        let localStorageTemp = JSON.parse(localStorage.getItem('crepas'));
        if(localStorageTemp){
            localStorageTemp.map((x, index)=> {x.Id = index});
            console.log(localStorageTemp);
            this.state={
                crepas:localStorageTemp,
                alert:{message:"", visible: false}            
            }
        }else{
            this.state = {
                crepas:[],
                alert:{message:"", visible: false}
            }
        }
    
        
    }

    calculateTotal = () => {
        let total = 0;
        this.state.crepas.map(x=> { total += parseInt(x.Quantity) * 2000});
        return total;
    }
    generateDescription = (crepa)=>{
        let frutas = crepa.ingredientes.frutas.filter(x=> x.isChecked);
        let rellenos = crepa.ingredientes.rellenos.filter(x=> x.isChecked);
        let toppings = crepa.ingredientes.toppings.filter(x=> x.isChecked);
        let rellenoString = "\nRelleno: ";
        rellenos.map(x=> {rellenoString+= x.Nombre + " "});

        let frutasString  =  "\nFrutas: ";
        frutas.map(x=> {frutasString+= x.Nombre + " "});
        let toppingsString = "\nTopping: ";
        toppings.map(x=> {toppingsString+= x.Nombre + " "});

        var returnValue = {frutas:frutasString, relleno:rellenoString, toppings:toppingsString}
        
        return returnValue;

    }

    handleEnviarPedido = ()=>{
        var nombreCliente = document.getElementById("nombreCliente").value;
        if(nombreCliente){
            var mensaje = "Nombre: " + nombreCliente;
            this.state.crepas.map(x=> {
                mensaje += this.generateDescription(x).relleno;
                mensaje += this.generateDescription(x).frutas;
                mensaje += this.generateDescription(x).toppings;
                mensaje += "\nCantidad: " + x.Quantity;
                mensaje += "\n******\n";
            });
            var mensajeEncoded = encodeURI(mensaje);
            var uri = "https://api.whatsapp.com/send?phone=50685988304&text="+mensajeEncoded;
            localStorage.removeItem("crepas");
            window.location = uri;
            
        }else{
            this.setState({...this.state, alert:{message:"Escribe tu Nombre", visible: true}});     
            setTimeout(() => {
                this.setState({...this.state, alert:{message:"Escribe tu Nombre", visible: false}});     
            }, 2000);      
        }
            
    }

    handleDelete=(crepa)=>{
        console.log(crepa);
        var newCrepasArray = this.state.crepas.filter(x=> x.Id !== crepa.Id);
        this.setState({crepas:newCrepasArray});
        localStorage.setItem('crepas', JSON.stringify(newCrepasArray));
    }

    handleQuantity = (operation, element)=>{
        let crepaArray = this.state.crepas;
       
        if(operation == "plus"){
            crepaArray.map((x)=> {
                if(x.Id == element.Id){
                    x.Quantity+= 1;
                }
            });            
            this.setState({crepas:crepaArray});
            localStorage.setItem('crepas', JSON.stringify(crepaArray));

        }else{
            crepaArray.map((x)=> {
                if(x.Id == element.Id){
                    x.Quantity = x.Quantity <= 1 ? 1 : x.Quantity -1;                            
                }
            });            
            this.setState({crepas:crepaArray});
            localStorage.setItem('crepas', JSON.stringify(crepaArray));
        }
    }
    render(){
        return(
        <div id="Confirmacion">
            <h1 className="confirmar-title">Confirma tu pedido</h1>
            <div className="important-banner">
                <h2 className="subtitle-left">Detalle de tu pedido</h2>
                
            </div>
            <div className="table-detalle">
            <table>
                <thead>
                    <tr>
                        <th>Cant</th>
                        <th>Descripción</th>                        
                        <th>Precio</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
              <tbody>
                {this.state.crepas.map(x=> (
                    <tr>
                        <td className="cantidad-crepa">
                        <span className="math-icon plus" onClick={()=>this.handleQuantity("plus",x)}></span>
                            <span className="cant-number">{x.Quantity}</span>
                        <span className="math-icon minus" onClick={()=>this.handleQuantity("minus", x)}></span>
                        </td>
                        <td>
                            {this.generateDescription(x).relleno}
                            <br></br>
                            <br></br>
                            {this.generateDescription(x).frutas}
                            <br></br>
                            <br></br>
                            {this.generateDescription(x).toppings}
                        </td>
                        <td>₡{parseInt(x.Quantity) * 2000 }</td>
                        <td style={{ textAlign:"center"}} ><img className="icon-delete" src ="imgs/delete.svg" onClick={()=>{this.handleDelete(x)}}></img></td>
                        
                    </tr>
                ))}
              </tbody>
            </table>
            
            </div>
            <div>
            <h2 className="subtitle-right">Total: <span>₡</span> {this.calculateTotal()}</h2>
            <h2 className="subtitle-left">¡Recuerda todas nuestras crepas incluyen 2 bolas de helado!<br></br>
                Servicio express gratis hasta las 7:00pm
            </h2><br></br><br></br><br></br>
            </div>
            <div className="input-name">
                <h2>Pedido a nombre de:</h2>
                <input id="nombreCliente" ></input>                
            </div>
            <a className="btn-enviar-pedido" onClick={this.handleEnviarPedido}>Enviar Pedido</a>            
            <Alert message={this.state.alert.message} visible={this.state.alert.visible}></Alert> 
        </div>       
        )
    }
}

export default Confirmacion;