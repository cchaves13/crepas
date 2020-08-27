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
                <div className="box-general">
                    <div id="container1" className="container-cajitas" >
                        <div>
                            <h1 className="titulo" >Express</h1>
                        </div>
                        <div>
                            <p>Servicio Gratis de 5:00 pm a 7:00 pm.
                            <br></br><br></br>
                            Servicio Pineapple de 7:00 pm a 9:30 pm 
                            </p>
                        </div>
                    </div>
                     <div id="container2" className="container-cajitas">
                         <div>
                            <h1 className="titulo">Pagos</h1>
                         </div>
                         <di>
                            <p> 
                                Efectivo 
                                <br></br><br></br>
                                Sinpe móvil
                            
                            </p>
                         </di>
                        
                    </div>
                    <div id="container3" className="container-cajitas">
                        <div>
                            <h1 className="titulo">Horario</h1>
                        </div>
                        <div>
                            <p> 
                                De Lunes a Viernes de  5:00pm a 9:30pm<br></br><br></br>
                                Sábados y Domingos de 2:00pm a 9:30pm
                            </p>
                        </div>
                        
                       
                    </div>
                
                
                </div>
                 
            
                
        )
    }
    

}

export default Schedule