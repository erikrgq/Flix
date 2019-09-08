import React, { Component } from 'react';
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
               slidesPerView: 6,
               loop: true,
               observer: true,
               slidesOffsetBefore: 50,
               spaceBetween: 80,

               breakpoints: {
                 1050: {
                   slidesPerView: 5,
                   spaceBetween: 70,
                   slidesOffsetBefore: 5,
                 },
                 640: {
                   slidesPerView: 3,
                   spaceBetween: 40,
                   slidesOffsetBefore: 10,
                 },
               },
               navigation: {
                 nextEl: '.cast-button-next',
                 prevEl: '.cast-button-prev',
               }
             });
          })();

        const config = this.props.config;
        return (
            <div className="cast-container">
                {this.props.people ?
                    <div className="swiper-container-cast">
                        <div className="swiper-wrapper cast_wrapper">
                            {this.props.people.map((person) => {
                                 
                                    return(
                                        <div key={person.id} className="swiper-slide cast_slide">

                                            <img className="cast-img" src={person.profile_path ? `${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.profile_sizes[1] : ''}${person.profile_path}` : config.backup} alt={person.name} />

                                            <h3 className="cast-name">{person.name} | {person.character}</h3>

                                        </div>
                                    );
                                
                            })}
                        </div>

                        <span className="cast-button-prev"><FontAwesomeIcon icon={faChevronLeft} /></span>
                        <span className="cast-button-next"><FontAwesomeIcon icon={faChevronRight} /></span>

                    </div>
                    :
                    <div className="swiper-container-cast">
                      <div className="swiper-wrapper cast_wrapper">
                        <h1>No Cast Found...</h1>
                      </div>
                    </div>
                }
            </div>
                
        );
    }
};

export default connect(null)(castCarousel);