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
            <div>
                <div className="box-general">
                    <div className="box">
                        <h2 style={{ textAlign: 'center' }}> Para que no salgas de casa</h2>
                        <br></br>
                        <h2 style={{ textAlign: 'center' }}>
                            <span> Las crepas de Vale</span> le ofrece servicio Express.
                        </h2>
                        <br></br>
                        <h2 style={{ textAlign: 'center' }}>
                            De 5:00 pm a 7:00pm el sevicio express es Gratis.
                        </h2>
                        <br></br>
                        <h2 style={{ textAlign: 'center' }}>De 7:00pm a 9:30 pm el servio express lo realiza Pineapple</h2>
                    </div>
                    <div className="box btn-ver-crepas">
                        <div className="btn-content">
                            <hr></hr>
                            <h2>
                                <a href='/ordena'>Elige tu  <br></br><span>Crepa</span> </a>
                            </h2>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className="horario-box">
                    <div className="crepas"></div>
                    <div className="info">
                       <h2> Nuestro Horario</h2>
                       <br></br>
                       <br></br>
                       <br></br>
                       <h2> De Lunes a Viernes de 5:00pm a 9:30pm</h2>
                       <br></br>
                       <br></br>
                       <h2> Sábados y Domingos de 2:00pm a 9:30pm</h2>
                       
                    </div>
                    <div className="crepas"></div>
                </div>
                <div className="box-general">
                <div className="box btn-ver-crepas">
                        <div className="btn-content">
                            <hr></hr>
                            <h2>
                            <a href='/crear'>Diseña tu  <br></br><span>Crepa</span> </a>
                            </h2>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="box">
                    <h2 style={{ textAlign: 'center' }}>
                            <span> Las crepas de Vale</span> te ofrece dos métodos de pago
                        </h2>
                        <h2 style={{ textAlign: 'center' }}> Para que cancelar tu compra fácilmente </h2>
                        <br></br>
                        <br></br>
                        <h2 style={{ textAlign: 'center' }}>
                            Efectivo
                        </h2>
                        <br></br>
                        <h2 style={{ textAlign: 'center' }}>Sinpe móvil</h2>
                    </div>
                </div>
            </div>



        )
    }


}

export default Schedule