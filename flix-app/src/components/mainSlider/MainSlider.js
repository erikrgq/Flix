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

    genreListTV = genreId => {
        let mainGenre;
        if(this.props.tvGenre.genres) {
            this.props.tvGenre.genres.forEach(genre => {
                if(genre.id === genreId[0]) {
                    return mainGenre = genre.name;
                }
            });
        }
        return mainGenre;
    }

    render() {
        
        (() => {
            const sliderEl = document.querySelector('.main-swiper-container');
            if(!sliderEl) {
                return;
            }
            const slider = new Swiper(sliderEl, {
                init: true,
                direction: 'verticle',
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                observer: true,
                observeSlideChildren: true,
                
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        })();

        return(
            <div className="main-swiper-container">
                <div className="swiper-wrapper main_wrapper">

                {
                    this.props.items.map((item, i) => {
                    if (i >= 0 && i <= 10) {
                        return (
                            <Link key={item.id} to={`/details/${this.props.itemType.toLowerCase()}/${item.id}`} className="swiper-slide main_slide">
                                <img src={this.props.config.images ? this.props.config.images.secure_base_url + this.props.config.images.backdrop_sizes[2] + item.backdrop_path : ''} alt={item.title} />
                                <div className="swiper-info">
                                    <p>TRENDING</p>
                                    <h2>{this.props.itemType === 'MOVIE' ? item.title : item.name}</h2>
                                    <p>{this.props.itemType === 'MOVIE' ? this.genreList(item.genre_ids) + ' | ' + item.vote_average : this.genreListTV(item.genre_ids) + ' | ' + item.vote_average}</p>
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

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,

    itemType: state.setMediaType.itemType,

    movieGenre: state.movieGenre,
    tvGenre: state.tvGenre,
    trendingMovie: state.trendingMovie,
    trendingTV: state.trendingTV,
});

export default connect(mapStateToProps)(MainSlider);