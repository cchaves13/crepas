import React, { Component } from 'react'
import './order.css'
import Crepas from '../Crepas'



class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    generateOrder(){
        var listCrepas= [
          {Nombre:"Lunes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate y caramelo",Precio:2000,
            crepa:{ingredientes:{
                rellenos:[ 
                    {Nombre:"Leche Condensada", isChecked:false,},
                    {Nombre:"Nutella", isChecked:true,},
                    {Nombre:"Mermelada de Mora", isChecked:false,},
                    {Nombre:"Mermelada de Fresa", isChecked:false,}],
                toppings:[
                    {Nombre:"Chocolate", isChecked:false,},
                    {Nombre:"Caramelo", isChecked:true,},
                    {Nombre:"Confitura", isChecked:true,},
                    {Nombre:"Botonetas", isChecked:false,},
                    {Nombre:"Masmelo", isChecked:false,},
                    {Nombre:"Tapita", isChecked:false,}],
                frutas:[ 
                    {Nombre:"Banano", isChecked:false,},
                    {Nombre:"Fresa", isChecked:true,},
                    {Nombre:"Kiwi", isChecked:true,},
                    {Nombre:"Manzana", isChecked:false,},
                    {Nombre:"Melocotón", isChecked:true,}]
            },
            Quantity:1 
        }
        }, 
          {Nombre:"Martes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000},  
          {Nombre:"Miércoles",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000}, 
          {Nombre:"Jueves",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000},
          {Nombre:"Viernes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000},  
          {Nombre:"Sábado",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000}, 
          {Nombre:"Domingo",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000}
        ];
        return  listCrepas.map((crepas, i)=> 
           <Crepas CrepasProps={crepas} key={i} ></Crepas>
        );
      }
      
    render() {
        return (
            <div id="order">
                <h1>Crepas del día, elige la que más te guste</h1>
                <div id="boxeCrepa">
                    {
                       this.generateOrder()
                    }
                </div>
            </div>
           
        );
    }
}

export default Order
