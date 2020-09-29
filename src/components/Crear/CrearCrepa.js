import React, { Component } from 'react'
import './CrearCrepa.css'

export default class Crearcrepa extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
       
    }

   

    render() {
        return (
           <div id="crearCrepas">
               <h1>CreandoCrepas</h1>

            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <h1>Elije el Relleno</h1>
                    </div>
                    <div className="swiper-slide">
                        <h1>Elije la Fruta</h1>
                    </div>
                    <div className="swiper-slide">
                        <h1>Elije el Topping</h1>
                    </div>
                    <div className="swiper-slide">
                        <h1>Elije la Cantidad</h1>
                    </div>
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>
           </div>
        )
    }
}
