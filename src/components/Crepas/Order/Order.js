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
          {Nombre:"Lunes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Fresa y Kiwi", Toppings:"Caramelo y Confitura",Precio:2000,
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
        {Nombre:"Martes",Imagen:"thursday",Relleno:"Leche Condensada", Frutas:"Banano, Fresa y Kiwi", Toppings:"Chocolate y Caramelo",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:true,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:true,},
                        {Nombre:"Confitura", isChecked:false,},
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
        {Nombre:"Miércoles",Imagen:"thursday",Relleno:"Mermelada de Mora", Frutas:"Melocoton, Banano y Kiwi", Toppings:"Chocolate y Botonetas",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:false,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:true,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:false,},
                        {Nombre:"Confitura", isChecked:false,},
                        {Nombre:"Botonetas", isChecked:true,},
                        {Nombre:"Masmelo", isChecked:false,},
                        {Nombre:"Tapita", isChecked:false,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:true,},
                        {Nombre:"Fresa", isChecked:false,},
                        {Nombre:"Kiwi", isChecked:true,},
                        {Nombre:"Manzana", isChecked:false,},
                        {Nombre:"Melocotón", isChecked:true,}]
                },
                Quantity:1 
            }
        }, 
        {Nombre:"Jueves",Imagen:"thursday",Relleno:"Mermelada de Fresa", Frutas:"Melocoton, Manzana y Kiwi", Toppings:"Chocolate y Masmelo",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:false,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:true,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:false,},
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
        {Nombre:"Viernes",Imagen:"thursday",Relleno:"Nutella", Frutas:"Melocoton, Manzana y Banano", Toppings:"Caramelo y Masmelo",Precio:2000,
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
                        {Nombre:"Banano", isChecked:true,},
                        {Nombre:"Fresa", isChecked:false,},
                        {Nombre:"Kiwi", isChecked:false,},
                        {Nombre:"Manzana", isChecked:true,},
                        {Nombre:"Melocotón", isChecked:true,}]
                },
                Quantity:1 
            }
        },  
        {Nombre:"Sábado",Imagen:"thursday",Relleno:"Leche Condensada", Frutas:"Banano, Fresa y Kiwi", Toppings:"Chocolate y Tapita",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:true,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:false,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:true,},
                        {Nombre:"Confitura", isChecked:false,},
                        {Nombre:"Botonetas", isChecked:false,},
                        {Nombre:"Masmelo", isChecked:false,},
                        {Nombre:"Tapita", isChecked:true,}],
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
        {Nombre:"Domingo",Imagen:"thursday",Relleno:"Mermelada de Fresa", Frutas:"Kiwi, Fresa y Manzana", Toppings:"Chocolate",Precio:2000,
            crepa:{
                ingredientes:{
                    rellenos:[ 
                        {Nombre:"Leche Condensada", isChecked:false,},
                        {Nombre:"Nutella", isChecked:false,},
                        {Nombre:"Mermelada de Mora", isChecked:false,},
                        {Nombre:"Mermelada de Fresa", isChecked:true,}],
                    toppings:[
                        {Nombre:"Chocolate", isChecked:true,},
                        {Nombre:"Caramelo", isChecked:true,},
                        {Nombre:"Confitura", isChecked:false,},
                        {Nombre:"Botonetas", isChecked:false,},
                        {Nombre:"Masmelo", isChecked:false,},
                        {Nombre:"Tapita", isChecked:true,}],
                    frutas:[ 
                        {Nombre:"Banano", isChecked:false,},
                        {Nombre:"Fresa", isChecked:true,},
                        {Nombre:"Kiwi", isChecked:true,},
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
