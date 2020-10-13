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
                            <div id="container-img1" className="compartido-img">
                                <div className="container-draw">
                                    <h2 className="titleSlide"  >
                                        Suspira con el sabor único que elaboramos solo para ti</h2>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div id="container-img2" className="compartido-img">
                                <div className="container-draw" >
                                    <h2 className="titleSlide" >
                                    UNA CREPA ES LA RESPUESTA NO IMPORTA CUÁL SEA LA PREGUNTA</h2>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                        <div id="container-img3" className="compartido-img">
                                <div className="container-draw" >
                                    <h2 className="titleSlide"  >
                                        ¿Se te antoja?<br></br> Un gustico para disfrutar de este dia.
                                    </h2>
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
