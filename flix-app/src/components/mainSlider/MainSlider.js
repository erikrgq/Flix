import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

import './mainSlider.css';

class MainSlider extends Component {
    //compares genre ids with genre list to get genre names
    genreList = genreId => {
        let mainGenre;
        if(this.props.movieGenre.genres) {
            this.props.movieGenre.genres.forEach(genre => {
                if(genre.id === genreId[0]) {
                    return mainGenre = genre.name;
                }
            });
        }
        return mainGenre;
    };

    render() {
        
        (() => {
            const sliderEl = document.querySelector('.swiper-container');
            if(!sliderEl) {
                return;
            }
            const slider = new Swiper(sliderEl, {
                direction: 'verticle',
                slidesPerView: 1,
                loop: true,
                observer: true,
      
                autoplay: {
                    delay: 5000,
                },
            });
        })();
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                {
                    this.props.items.map((item, i) => {
                    if (i > 1 && i < 12) {
                        return (
                            <Link key={item.id} className="swiper-slide">
                                <img src={this.props.config.images ? this.props.config.images.secure_base_url + this.props.config.images.backdrop_sizes[2] + item.backdrop_path : ''} alt={item.title} style={{height: '100%', width: '100%'}} />
                                <div className="swiper-info">
                                    <p>TRENDING</p>
                                    <h2>{item.title}</h2>
                                    <p>{this.genreList(item.genre_ids)} | {item.vote_average} Rating</p>
                                </div>
                            </Link>
                        );
                        }
                    })
                }
                </div>
            </div>
        );
    }
};

export default MainSlider;