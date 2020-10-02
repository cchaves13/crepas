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
            }
        }
       
    }

    generateRelleno(){;
        return  this.state.ingredientes.rellenos.map((relleno, i)=> 
           <Ingredientes Ingrediente={relleno} CantMax={1} Tipo={"Relleno"} handleClick={this.handleIngredienteClick} key={i} ></Ingredientes>
        );
      }
      generateFrutas(){       
        return  this.state.ingredientes.frutas.map((fruta, i)=> 
           <Ingredientes Ingrediente={fruta} CantMax={2} Tipo={"Fruta"} handleClick={this.handleIngredienteClick} key={i} ></Ingredientes>
        );
      }
      generateToppings(){
        var listIngredientes= [
          {Imagen:"Banano",Id:"10"}, 
          {Imagen:"fresas",Id:"11"},
          {Imagen:"Banano",Id:"12"}, 
          {Imagen:"fresas",Id:"13"},
          {Imagen:"Banano",Id:"14"},
          {Imagen:"Banano",Id:"15"}
        ];
        return  listIngredientes.map((crearC, i)=> 
           <Ingredientes CrearCProps={crearC} key={i} ></Ingredientes>
        );
      }

   

    handleIngredienteClick = (element, cantMax, tipo) =>{
        let ingredientArray =[];
        var ingredient = {};
        var quantityChecked = 0;

        //Falta Aqui
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
        
        console.log({quantityChecked:quantityChecked, ingredient:ingredient});
        if(quantityChecked < cantMax && !ingredient.isChecked){
            ingredientArray.map((ingred)=>{
                if(ingred.Nombre == element.Nombre){
                    ingred.isChecked = true;
                }
            });
            //Falta aqui
            if(tipo == "Fruta"){
                this.setState({ingredientes:{frutas:[...ingredientArray]}});
            }
            if(tipo =="Relleno"){
                this.setState({ingredientes:{rellenos:[...ingredientArray]}})
            }
        }else{
            alert("Maximo 3 Frutas");
        }
    }  

    render() {
        return (
           <div id="crearCrepas">
               <h1>CreandoCrepas</h1>

            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <h1>Elije el Relleno</h1>
                        <div className="contenedor-Relleno">
                            {
                               this.generateRelleno()
                            }
                        </div>
                       
                    </div>
                    <div className="swiper-slide">
                        <h1>Elije la Fruta</h1>
                        <div className="contenedor-Relleno">
                            {
                                this.generateFrutas()
                            }
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h1>Elije el Topping</h1>
                        <div className="contenedor-Relleno">
                            {
                               /* this.generateToppings()*/
                            }
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <h1>Elije la Cantidad</h1>
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
