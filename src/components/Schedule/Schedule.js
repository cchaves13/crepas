import React, { Component } from 'react'
import './schedule.css'

class Schedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
                <div className="flex-container">
                    <div  className="container1" >
                     <h1 className="titulo" >Express</h1>
                         <p>Servicio Express gratis <br></br>
                             5pm a 7pm.<br></br>
                            Después de las 7pm a 9:30 pm <br></br>express lo realiza Pineapple
                         </p>
                    </div>
                        <div className="container2">
                        <h1 className="titulo">Pago</h1>
                        <p> 
                        Efectivo <br></br>
                        Sinpe móvil
                         </p>
                        </div>
                        <div className="container3">
                        <h1 className="titulo" >Horario</h1>
                        <p> 
                        De  Lunes   a  Viernes  
                        de  5:00pm a 9:30pm<br></br><br></br>
                        Sabados y Domingos 
                        de 2:00pm a 9:30pm
                        </p>
                       
                        </div>
                
                </div>
                 
            
                
        )
    }
    

}

export default Schedule