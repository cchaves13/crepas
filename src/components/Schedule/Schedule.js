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
                    <div id="horario" className="diasHorario" >
                     <h1 >Horario</h1>
                        <h3> Lunes …………………….................... 5pm a 9:30pm <br></br> <br></br>
                            Martes …………………....................... 5pm a 9:30pm<br></br> <br></br>
                            Miércoles  ………………….................. 5pm a 9:30pm<br></br> <br></br>
                            Jueves ...........………………………… 5pm a 9:30pm<br></br> <br></br>
                            Viernes ..........………………………… 5pm a 9:30pm<br></br> <br></br>
                            Sábado   …………..……………...……..  5pm a 9:30pm<br></br> <br></br>
                            Domingo ………………...........…..…..  5pm a 9:30pm 
                        </h3>
                    </div>
                        <div id="imagenHorario">
                            <img id="imagenHorario" src="imgs/Imagenhorario.jpg"></img>
                        </div>
                
                </div>
                 
            
                
        )
    }
    

}

export default Schedule