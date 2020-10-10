import React, { Component } from 'react'
import './CrearCrepa.css'
import Ingredientes from './Ingredientes'


export default class Crearcrepa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredientes:{
                rellenos:[ 
                    {Nombre:"Leche Condensada", isChecked:false,},
                    {Nombre:"Nutella", isChecked:false,},
                    {Nombre:"Mermelada de Mora", isChecked:false,},
                    {Nombre:"Mermelada de Fresa", isChecked:false,}],
                toppings:[
                    {Nombre:"Chocolate", isChecked:false,},
                    {Nombre:"Caramelo", isChecked:false,},
                    {Nombre:"Confitura", isChecked:false,},
                    {Nombre:"Botonetas", isChecked:false,},
                    {Nombre:"Masmelo", isChecked:false,},
                    {Nombre:"Tapita", isChecked:false,}],
                frutas:[ 
                    {Nombre:"Banano", isChecked:false,},
                    {Nombre:"Fresa", isChecked:false,},
                    {Nombre:"Kiwi", isChecked:false,},
                    {Nombre:"Manzana", isChecked:false,},
                    {Nombre:"Melocotón", isChecked:false,}]
            },
            Quantity:1 
        }
       
    }

    generateRelleno(){
        return  this.state.ingredientes.rellenos.map((relleno, i)=> 
           <Ingredientes Ingrediente={relleno} CantMax={1} Tipo={"Relleno"} handleClick={this.handleIngredienteClick} key={i} ></Ingredientes>
        );
      }
      generateFrutas(){       
        return  this.state.ingredientes.frutas.map((fruta, i)=> 
           <Ingredientes Ingrediente={fruta} CantMax={3} Tipo={"Fruta"} handleClick={this.handleIngredienteClick} key={i} ></Ingredientes>
        );
      }
      generateToppings(){
        return  this.state.ingredientes.toppings.map((topping, i)=> 
           <Ingredientes Ingrediente={topping} CantMax={2} Tipo={"Topping"} handleClick={this.handleIngredienteClick} key={i} ></Ingredientes>
        );
      }

   

    handleIngredienteClick = (element, cantMax, tipo) =>{
        let ingredientArray =[];
        var ingredient = {};
        var quantityChecked = 0;

        if(tipo == "Fruta"){
            ingredientArray = this.state.ingredientes.frutas;        
            ingredient = ingredientArray.find(x=> x.Nombre == element.Nombre);        
            quantityChecked = this.state.ingredientes.frutas.filter(x=> x.isChecked).length;
        }
        if(tipo == "Relleno"){
            ingredientArray= this.state.ingredientes.rellenos;
            ingredient=ingredientArray.find(x=> x.Nombre == element.Nombre);
            quantityChecked = this.state.ingredientes.rellenos.filter(x=> x.isChecked).length;
        }
        if(tipo =="Topping"){
            ingredientArray= this.state.ingredientes.toppings;
            ingredient= ingredientArray.find(x=> x.Nombre== element.Nombre);
            quantityChecked= this.state.ingredientes.toppings.filter(x=> x.isChecked).length;
        }
            
        console.log({quantityChecked:quantityChecked, ingredient:ingredient});
        if( ingredient.isChecked==true)
            { 
                ingredientArray.map((ingred)=>{
                    if(ingred.Nombre == element.Nombre)
                    {
                        ingred.isChecked = false;
                    }
                });
            }
            else
            {
                if(quantityChecked < cantMax ){
                    ingredientArray.map((ingred)=>{
                        if(ingred.Nombre == element.Nombre)
                        {
                            ingred.isChecked = true;
                        }
                    });
                }
            }
           
            if(tipo == "Fruta"){
                 this.setState({ingredientes: {...this.state.ingredientes, frutas:[...ingredientArray]}});
            }
            if(tipo =="Relleno"){
                this.setState({ingredientes: {...this.state.ingredientes, rellenos:[...ingredientArray]}});
            }
            if(tipo=="Topping"){
                this.setState({ingredientes: {...this.state.ingredientes, toppings:[...ingredientArray]}});
            }
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
           <div id="crearCrepas">
               <h1 >Diseña tu crepa en tan solo  <span>4</span> pasos</h1>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <h2 style={{ textAlign: 'center' }}> <span>Paso 1: </span>Elije tu relleno favorito</h2>
                        <div className="contenedor-Ingredientes">
                            {
                               this.generateRelleno()
                            }
                        </div>
                       
                    </div>
                    <div className="swiper-slide">
                        <h2 style={{ textAlign: 'center' }}> <span>Paso 2: </span>Elije 3 frutas a tu gusto</h2>
                        <div className="contenedor-Ingredientes">
                            {
                                 this.generateFrutas()
                            }
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h2 style={{ textAlign: 'center' }}> <span>Paso 3: </span>Elije 2 Toppings preferidos</h2>
                        <div className="contenedor-Ingredientes">
                            {
                               this.generateToppings()
                            }
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h2 className="step-four"> <span>Paso 4: </span>¿Cuántas crepas de la que creaste quieres?</h2>
                        <div className="quantity-container">
                            <span className="math-icon minus" onClick={()=>this.handleQuantity("minus")}></span>
                            <input value={this.state.Quantity} disabled></input>
                            <span className="math-icon plus" onClick={()=>this.handleQuantity("plus")}></span>
                        </div>  
                        <div className="container-btn-crear-crepas">
                            <button className="crear-crepas-btn">Añadir y diseñar otra</button>
                            <button className="crear-crepas-btn">Pedido Listo</button> 
                        </div> 
                            
                    </div>
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>
           </div>
        )
    }
}
