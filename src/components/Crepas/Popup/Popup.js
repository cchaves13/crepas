import React from 'react';  
import './popup.css';  

class Popup extends React.Component {  
  constructor(props) {
    super(props)

        this.state = {Quantity:1 }
  }

  handleQuantity = (operation)=>{
    if(operation == "plus"){
        this.setState({Quantity:this.state.Quantity +1});
    }else{
        this.setState({Quantity:this.state.Quantity <= 1 ? 1 : this.state.Quantity -1});
    }
  }
  render() {    
    return (  
            <div className='popup'>  
            <div className='inner'>  
                  <h1>{this.props.text}</h1>  
                  <p>Seleccione la cantidad de crepas de este tipo que desea ordenar:</p>
                  <div className="quant-container">
                            <span className="icon-math resta" onClick={()=>this.handleQuantity("minus")}></span>
                            <input value={this.state.Quantity} disabled></input>
                            <span className="icon-math suma" onClick={()=>this.handleQuantity("plus")}></span>
                   </div>
                  <button className='btn-Popup' onClick={this.props.closePopup}>Cancelar</button>  
                  <button className='btn-Popup' onClick={this.props.closePopup}>Ordenar</button>  
            </div>  
            </div>  
        );  
    }  
}  

export default Popup;