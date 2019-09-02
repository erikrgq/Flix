import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './mediaStyle.css';

class MediaCarousel extends Component {
    renderGenres = genres => {
        if(this.props.genres) {
            let genreArray = this.props.genres.filter(genre => genre.id === genres[0] || genre.id === genres[1] ? genre.name : null);
            return <p className="swiper-slide">{genreArray[0] ? genreArray[0].name : ''}{genreArray[1] ? ' / ' + genreArray[1].name : ''}</p>;
        }
    }

    render() {
        const config = this.props.config;
        if(!this.props.items) {
            return;
        }
        // Init swiper
        (() => {
            const sliderEl = document.querySelectorAll('.media-swiper-container');
            if(!sliderEl){
            return;
            }
            const slider = new Swiper(sliderEl, {
            init: true,
            slidesPerView: 7,
            loop: true,
            spaceBetween: 14,
            observer: true,
    
            breakpoints: {
                1145: {
                slidesPerView: 5,
                spaceBetween: 10,
                },
                699: {
                slidesPerView: 3,
                spaceBetween: 10,
                },
            },
            navigation: {
                nextEl: '.media-button-next',
                prevEl: '.media-button-prev',
            }
            });
        })();
        return (
            
            <div className="media-container">

                <section className="media-swiper-container">
                    <h2>{this.props.title}</h2>

                    <div className="swiper-wrapper media_wrapper">

                    {this.props.items.map((movie, i) => (
                        <div key={movie.id} className="swiper-slide media_slide">

                            <Link to={`/details/${this.props.type.toLowerCase()}/${movie.id}`}>
                                <span>{movie.vote_average} <FontAwesomeIcon icon={faStar} /></span>

                                <figure className="media_figure">
                                <img src={`${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.poster_sizes[1] : ''}${movie.poster_path}`} alt={movie.title} />
                                </figure>

                                <h4>{movie.title}</h4>
                                <p>{this.renderGenres(movie.genre_ids)}</p>
                            </Link>

                        </div>
                    ))}

                    </div>


                    <span className="media-button-prev"><FontAwesomeIcon icon={faChevronLeft}/></span>
                    <span className="media-button-next"><FontAwesomeIcon icon={faChevronRight}/></span>

                </section>

                <hr className="media_carousel_separator" />
            </div>
        )
    }
}

export default MediaCarousel;
