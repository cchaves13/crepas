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
          {Imagen:"Monday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate y caramelo",Precio:2000}, 
          {Imagen:"wednesday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000},  
          {Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000}, 
          {Imagen:"tuesday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000}
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
