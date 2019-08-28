import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
        return (
            
            <div className="media-container">

                <section className="media-swiper-container">
                    <h2>{this.props.title}</h2>

                    <div className="swiper-wrapper media_wrapper">
                    {this.props.items.map((movie, i) => (
                        <div key={movie.id} className="swiper-slide media_slide">
                            <Link to={`/details`}>
                            <span>{movie.vote_average}</span>
                            <img src={`${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.poster_sizes[1] : ''}${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <p>{this.renderGenres(movie.genre_ids)}</p>
                            </Link>
                        </div>
                    ))}
                    </div>


                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                </section>

                <hr className="media_carousel_separator" />
            </div>
        )
    }
}

export default MediaCarousel;
