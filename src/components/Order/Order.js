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
          {Relleno:"Nutella", Frutas:"Melocoto, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000}, 
          {Relleno:"Nutella", Frutas:"Melocoto, Fresa y Kiwi", Toppings:"Chocolate",Precio:2000},  
          {Relleno:"Nutella", Frutas:"Melocoto, Fresa", Toppings:"Chocolate",Precio:2000}, 
          {Relleno:"Nutella", Frutas:"Melocoto, Fresa", Toppings:"Chocolate",Precio:2000}
        ];
        return  listCrepas.map((crepas, i)=> 
           <Crepas CrepasProps={crepas} key={i} ></Crepas>
        );
      }

    render() {
        return (
            <div id="order">
                <h1>Ordena Crepas aqui</h1>
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
