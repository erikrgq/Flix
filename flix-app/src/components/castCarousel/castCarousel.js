import React, { Component } from 'react'
import { connect } from 'react-redux';

import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './castStyle.css';


class castCarousel extends Component {

    render() {
        //init swiper
        (() => {
            const sliderEl = document.querySelectorAll('.swiper-container-cast');
             if(!sliderEl){
               return;
             }
             const slider = new Swiper(sliderEl, {
               init: true,
               slidesPerView: 5,
               slidesPerGroup: 5,
               loop: true,
               spaceBetween: 100,
               observer: true,
               observeSlideChildren: true,
      
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
          })();

        const config = this.props.config;
        return (
            <div className="cast-container">
                {this.props.people ?
                    <div className="swiper-container-cast">
                        <div className="swiper-wrapper cast_wrapper">
                            {this.props.people.map((person, i) => {
                                if(i <= 10) {
                                    return(
                                        <div key={person.id} className="swiper-slide cast_slide">
                                            <img className="cast-img" src={person.profile_path && config.images ? `${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.profile_sizes[1] : ''}${person.profile_path}` : config.backup} alt={person.name} />
                                            <h3 className="cast-name">{person.name} | {person.character}</h3>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        <span className="swiper-button-prev"><FontAwesomeIcon icon={faChevronLeft} /></span>
                        <span className="swiper-button-next"><FontAwesomeIcon icon={faChevronRight} /></span>

                    </div>
                    :
                    <p className="cast-error">No cast found...</p>
                }
            </div>
                
        );
    }
};

export default connect(null)(castCarousel);