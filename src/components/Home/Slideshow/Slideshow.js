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
                        <div className="swiper-slide"> <img src="/imgs/Monday.jpg"></img> </div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
        
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
