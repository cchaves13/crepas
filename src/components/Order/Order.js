import React, { Component } from 'react'
import './order.css'
import Crepas from './../Crepas/Crepas'



class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    generateOrder(){
        var listCrepas= [
          {Nombre:"Lunes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate y caramelo",Precio:2000}, 
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
