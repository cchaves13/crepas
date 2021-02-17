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
          {Nombre:"Lunes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Banano, Fresa y Kiwi", Toppings:"Chocolate, Caramelo y Confitura de color",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:false,},
                        {Nombre:"Nutella", isChecked:true,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:true,},
                        {Nombre:"Confitura", isChecked:true,},
                        {Nombre:"Botonetas", isChecked:false,},
                        {Nombre:"Masmelo", isChecked:false,},
                        {Nombre:"Tapita", isChecked:false,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:true,},
                        {Nombre:"Fresa", isChecked:true,},
                        {Nombre:"Kiwi", isChecked:true,},
                        {Nombre:"Manzana", isChecked:false,},
                        {Nombre:"Melocotón", isChecked:false,}]
                },
                Quantity:1 
            }
        }, 
        {Nombre:"Martes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Kiwi, Manzana y Melocotón", Toppings:"Confitura de color y Botonetas",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:false,},
                        {Nombre:"Nutella", isChecked:true,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:false,},
                        {Nombre:"Caramelo", isChecked:false,},
                        {Nombre:"Confitura", isChecked:true,},
                        {Nombre:"Botonetas", isChecked:true,},
                        {Nombre:"Masmelo", isChecked:false,},
                        {Nombre:"Tapita", isChecked:false,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:false,},
                        {Nombre:"Fresa", isChecked:false,},
                        {Nombre:"Kiwi", isChecked:true,},
                        {Nombre:"Manzana", isChecked:true,},
                        {Nombre:"Melocotón", isChecked:true,}]
                },
                Quantity:1 
            }
        },  
        {Nombre:"Miércoles",Imagen:"thursday",Relleno:"Leche Condensada", Frutas:"Banano, Fresa y Kiwi", Toppings:"Botonetas  y Masmelo",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:true,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:false,},
                        {Nombre:"Caramelo", isChecked:false,},
                        {Nombre:"Confitura", isChecked:false,},
                        {Nombre:"Botonetas", isChecked:true,},
                        {Nombre:"Masmelo", isChecked:true,},
                        {Nombre:"Tapita", isChecked:false,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:true,},
                        {Nombre:"Fresa", isChecked:true,},
                        {Nombre:"Kiwi", isChecked:true,},
                        {Nombre:"Manzana", isChecked:false,},
                        {Nombre:"Melocotón", isChecked:false,}]
                },
                Quantity:1 
            }
        }, 
        {Nombre:"Jueves",Imagen:"thursday",Relleno:"Nutella", Frutas:"Kiwi, Manzana y Melocotón", Toppings:"Caramelo y Masmelo",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:false,},
                        {Nombre:"Nutella", isChecked:true,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:false,},
                        {Nombre:"Caramelo", isChecked:true,},
                        {Nombre:"Confitura", isChecked:false,},
                        {Nombre:"Botonetas", isChecked:false,},
                        {Nombre:"Masmelo", isChecked:true,},
                        {Nombre:"Tapita", isChecked:false,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:false,},
                        {Nombre:"Fresa", isChecked:false,},
                        {Nombre:"Kiwi", isChecked:true,},
                        {Nombre:"Manzana", isChecked:true,},
                        {Nombre:"Melocotón", isChecked:true,}]
                },
                Quantity:1 
            }
        },
        {Nombre:"Viernes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Banano, Fresa y Melocotón", Toppings:"Chocolate y Confitura de color",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:false,},
                        {Nombre:"Nutella", isChecked:true,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:false,},
                        {Nombre:"Confitura", isChecked:true,},
                        {Nombre:"Botonetas", isChecked:false,},
                        {Nombre:"Masmelo", isChecked:false,},
                        {Nombre:"Tapita", isChecked:false,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:true,},
                        {Nombre:"Fresa", isChecked:true,},
                        {Nombre:"Kiwi", isChecked:false,},
                        {Nombre:"Manzana", isChecked:false,},
                        {Nombre:"Melocotón", isChecked:true,}]
                },
                Quantity:1 
            }
        },  
        {Nombre:"Sábado",Imagen:"thursday",Relleno:"Leche Condensada", Frutas:"Banano, Kiwi y Manzana", Toppings:"Masmelo y Tapita",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:true,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:false,},
                        {Nombre:"Caramelo", isChecked:false,},
                        {Nombre:"Confitura", isChecked:false,},
                        {Nombre:"Botonetas", isChecked:false,},
                        {Nombre:"Masmelo", isChecked:true,},
                        {Nombre:"Tapita", isChecked:true,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:true,},
                        {Nombre:"Fresa", isChecked:false,},
                        {Nombre:"Kiwi", isChecked:true,},
                        {Nombre:"Manzana", isChecked:true,},
                        {Nombre:"Melocotón", isChecked:false,}]
                },
                Quantity:1 
            }
        }, 
        {Nombre:"Domingo",Imagen:"thursday",Relleno:"Leche Condensada", Frutas:"Banano, Fresa y Manzana", Toppings:"Chocolate y Tapita",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:true,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:true,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:false,},
                        {Nombre:"Confitura", isChecked:false,},
                        {Nombre:"Botonetas", isChecked:false,},
                        {Nombre:"Masmelo", isChecked:false,},
                        {Nombre:"Tapita", isChecked:true,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:true,},
                        {Nombre:"Fresa", isChecked:true,},
                        {Nombre:"Kiwi", isChecked:false,},
                        {Nombre:"Manzana", isChecked:true,},
                        {Nombre:"Melocotón", isChecked:false,}]
                },
                Quantity:1 
            }
        }
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
