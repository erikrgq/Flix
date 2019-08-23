import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Swiper from 'swiper';

import './mainSlider.css';

class MainSlider extends Component {
    render() {
        (() => {
            const sliderEl = document.querySelector('.swiper-container');
                if(!sliderEl){
                    return;
                }
            const slider = new Swiper(sliderEl, {
                direction: 'verticle',
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                observer: true,
      
                autoplay: {
                    delay: 7500,
                },
      
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.home-swiper-button-next',
                    prevEl: '.home-swiper-button-prev',
                }
            });
        })();

        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="https://cdn.onebauer.media/one/empire-tmdb/films/99861/images/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" alt="" />
                        <div className="swiper-info">
                            <p>Trending</p>
                            <h2>Title here</h2>
                            <p>Genre | 7.8 Rating</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="https://cdn.onebauer.media/one/empire-tmdb/films/99861/images/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" alt="" />
                        <div className="swiper-info">
                            <p>Trending</p>
                            <h2>Title here</h2>
                            <p>Genre | 9.9 Rating</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="https://cdn.onebauer.media/one/empire-tmdb/films/99861/images/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" alt="" />
                        <div className="swiper-info">
                            <p>Trending</p>
                            <h2>Title here</h2>
                            <p>Genre | 9.1 Rating</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,
    searchResultData: state.searchResult,
    searchInput: state.searchText.searchInput
});

export default connect(mapStateToProps)(MainSlider);