import React, { Component } from 'react'
import Swiper from 'swiper';

import Nav from '../Nav/Nav';
import MainSlider from '../mainSlider/MainSlider';
import MediaButtons from '../mediaButtons/MediaButton';
import DiscoverMovies from '../discoverMovies/DiscoverMovies';

export default class Home extends Component {
    render() {
        (() => {
            //carousel package init
            const sliderEl = document.querySelector('.slider_container');
            //looks if the element is rendered
            if(!sliderEl){
                return;
            }
            const slider = new Swiper(sliderEl, {
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                observer: true,

                autoplay: {
                    delay: 7500
                },

                pagination: {
                    el: '.slider_container_pagination',
                    type: 'progressbar'
                }
            });
        })();
        return (
            <div>
                <Nav />
                <MainSlider />
                <MediaButtons />
                <DiscoverMovies />
            </div>
        )
    }
}
