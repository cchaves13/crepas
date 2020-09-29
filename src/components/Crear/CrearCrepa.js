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
                        {/*<input id="checkboxid" type="checkbox" class="css-checkbox"></input>*/}
                        {/*<label for="checkboxid" class="css-label"></label>*/}
                        <ul>
                            <li>
                                <input type="checkbox" id="myCheckbox1" />
                                <label for="myCheckbox1"><img src="/imgs/MarmeladaMora.PNG" /></label>
                            </li>
                            <li>

                                <input type="checkbox" id="myCheckbox2" />
                                <label for="myCheckbox2"><img src="/imgs/Nutella.PNG" /></label>
                            </li>
                            <li>

                                <input type="checkbox" id="myCheckbox3" />
                                <label for="myCheckbox3"><img src="/imgs/MermeladaFresa.PNG" /></label>
                            </li>
                            <li>

                            <input type="checkbox" id="myCheckbox4" />
                            <label for="myCheckbox4"><img src="/imgs/lecheCondensada.PNG" /></label>
                            </li>
                            
                            
                            </ul>
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
