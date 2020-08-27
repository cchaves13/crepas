import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './Slideshow.css';
class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="slideshowContainer">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"> 
                            <div id="container-img1">
                                <div id="container-draw1" >
                                    <h2 id="titleSlide1" >
                                        UN BUEN ESTADO DE ÁNIMO ES REFLEJO DE UNA BUENA CREPA</h2>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div id="container-img2">
                                <div id="container-draw2" >
                                    <h2 id="titleSlide2" >
                                    UNA CREPA ES LA RESPUESTA NO IMPORTA CUÁL SEA LA PREGUNTA</h2>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                        <div id="container-img3">
                                <div id="container-draw3" >
                                    <h2 id="titleSlide3" >
                                    NO HAY PROBLEMA QUE NO SE PUEDA SOLUCIONAR CON UNA DELICIOSA CREPA</h2>
                                </div>
                            </div>
                        </div>
        
                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        );
    }

}




export default Slideshow;
