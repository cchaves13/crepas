import React from 'react';  
import './popup.css';  

class Popup extends React.Component {  
  render() {    
    return (  
            <div className='popup'>  
            <div className='inner'>  
                  <h1>{this.props.text}</h1>  
                  <p>Seleccione la cantidad de crepas de este tipo que desea ordenar:  <input className='quant-Crepa' defaultValue='1' type="number" min='1' id="cantCrepas" name="cantCrepas" step="1"></input></p>
                  <button className='btn-Popup' onClick={this.props.closePopup}>Cancelar</button>  
                  <button className='btn-Popup' onClick={this.props.closePopup}>Ordenar</button>  
            </div>  
            </div>  
        );  
    }  
}  

export default Popup;