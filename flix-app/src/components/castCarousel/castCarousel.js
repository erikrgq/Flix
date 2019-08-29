import React, { Component } from 'react'

import Swiper from 'swiper';

import './castStyle.css';


class castCarousel extends Component {

    render() {
        //init swiper
        /*(() => {
            const sliderEl = document.querySelectorAll('.swiper-container-cast');
             if(!sliderEl){
               return;
             }
             const slider = new Swiper(sliderEl, {
               init: true,
               slidesPerView: 5,
               loop: true,
               spaceBetween: 30,
               observer: true,
      
               breakpoints: {
                 768: {
                   slidesPerView: 5
                 },
                 640: {
                   slidesPerView: 3
                 },
               },
               pagination: {
                 el: '.swiper-pagination',
                 clickable: true
               },
               navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
               }
             });
          })();*/

        return (
            <div className="cast-container">
                {this.props.people.length > 0 ?
                    <div className="swiper-container-cast">
                        <div className="swiper-wrapper">
                            {this.props.people.map((person, i) => {
                                if(i <= 10) {
                                    return(
                                        <div key={person.id} className="swiper-slide">
                                            <img className="cast-img" src={person.profile_path ? this.props.config.images.secure_base_url + this.props.config.profile_sizes[1] + person.profile_path : ''} alt={person.name} />
                                            <h3 className="cast-name">{person.name} AS {person.character}</h3>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>

                    </div>
                    :
                    <p className="cast-error">No cast found...</p>
                }
            </div>
                
        );
    }
};

export default castCarousel;