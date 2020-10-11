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
    console.log(this.state.Quantity);
  }

  handleOrdenar = ()=>{    
    this.props.crepa.crepa.Quantity = this.state.Quantity;
    var crepasStorage = JSON.parse(localStorage.getItem('crepas'));
    if(!crepasStorage){
        localStorage.setItem('crepas',  JSON.stringify([this.props.crepa.crepa]));
        alert('undefined bro!')
    }else{
        let tempStorage = [...crepasStorage, this.props.crepa.crepa];
        localStorage.setItem('crepas', JSON.stringify(tempStorage));
    }    
    this.props.closePopup();

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
                  <button className='btn-Popup' onClick={()=>this.handleOrdenar()}>Ordenar</button>  
            </div>  
            </div>  
        );  
    }  
}  

export default Popup;