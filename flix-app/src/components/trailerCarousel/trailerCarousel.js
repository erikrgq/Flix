import React, { Component } from 'react';

import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './trailer.css';

class trailerCarousel extends Component {
    render() {
        (() => {
            const sliderEl = document.querySelectorAll('.swiper-container-trailer');
             if(!sliderEl){
               return;
             }
             const slider = new Swiper(sliderEl, {
               init: true,
               slidesPerView: 3,
               spaceBetween: 100,
               slidesOffsetBefore: 30,
               centeredSlides: true,
      
               breakpoints: {
                 1500: {
                   slidesPerView: 2,
                 },
                 800: {
                   slidesPerView: 1,
                   centeredSlides: true,
                   slidesOffsetBefore: 0,
                 }
               },
               pagination: {
                 el: '.trailer-pagination',
                 clickable: true
               },
               navigation: {
                 nextEl: '.trailer-button-next',
                 prevEl: '.trailer-button-prev',
               }
             });
          })();
        return (
            <div className="trailer-swiper">
                <div className="swiper-container-trailer">
                        {this.props.trailers ? 
                        <div className="swiper-wrapper trailer_wrapper">
                            
                            {this.props.trailers.map(trailer => (
                                <div key={trailer.key} className="swiper-slide trailer_slide">

                                <iframe title="1" width="420" height="315"src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
            
                                </div>
                            ))}
                                
                        </div>
                        : <h1 className="trailer_wrapper">No Trailers Found...</h1>}
                    
                        <span className="trailer-button-prev"><FontAwesomeIcon icon={faChevronLeft} /></span>
                        <span className="trailer-button-next"><FontAwesomeIcon icon={faChevronRight} /></span>

                </div>
            </div>
        )
    }
}

export default trailerCarousel;
