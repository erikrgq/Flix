import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import movieDetails from '../../actions/movieActions/movieDetails';
import movieCredits from '../../actions/movieActions/movieCredits';
import movieReviews from '../../actions/movieActions/movieReviews';
import movieTrailers from '../../actions/movieActions/movieTrailers';

import tvDetails from '../../actions/TVActions/TVDetails';
import tvCredits from '../../actions/TVActions/TVCredits';
import tvTrailers from '../../actions/TVActions/TVTrailers';
import tvReviews from '../../actions/TVActions/TVReviews';

import Cast from '../castCarousel/castCarousel';

import './itemStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

class itemDetails extends Component {
    componentDidMount(){
        this.fetchData(this.props.match.params.id);
    }
    componentDidUpdate(nextProps){
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.fetchData(nextProps.match.params.id, nextProps.match.params.type);
        }
    }

    fetchData(id, type = this.props.match.params.type){
        if(type === 'movie') {
            this.props.movieDetails(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.props.apiKey}&language=en-US`);
            this.props.movieCredits(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.props.apiKey}`);
            this.props.movieReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.props.apiKey}&language=en-US&page=1`);
            this.props.movieTrailers(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.props.apiKey}&language=en-US`);
        } else if(type === 'tv') {
            this.props.tvDetails(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.props.apiKey}&language=en-US`);
            this.props.tvCredits(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.props.apiKey}&language=en-US`);
            this.props.tvReviews(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${this.props.apiKey}&language=en-US&page=1`);
            this.props.tvTrailers(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.props.apiKey}&language=en-US`);
        }
    };

    itemDetailsHeader = (type) => {
        if(type === 'movie') {
            return (
                <div className="item-details-info-container">
                    <img className="item-details-info-img" src={this.props.config.images && this.props.MovieDetails.poster_path ? this.props.config.images.secure_base_url + this.props.config.images.backdrop_sizes[2] + this.props.MovieDetails.backdrop_path : ''} alt={this.props.MovieDetails.title} />
                        
                    <div className="item-details-info-content">
        
                            <img className="content-img" src={this.props.config.images && this.props.MovieDetails.poster_path ? this.props.config.images.secure_base_url + this.props.config.images.poster_sizes[0] + this.props.MovieDetails.poster_path : ''} alt={this.props.MovieDetails.name} />
                            
                            <div className="content-info">
                            <h1>{this.props.MovieDetails.title}</h1>
                            <div className="content-rating">
                                <p className="content-rating-digit">{this.props.MovieDetails ? this.props.MovieDetails.vote_average : ''}</p>
                                <div className="content-rating-star">+ - + -</div>
                            </div>
                            <p className="content-detail">{this.props.MovieDetails ? this.props.MovieDetails.status : ''} {this.props.MovieDetails.release_date ? this.formatYear(this.props.MovieDetails.release_date) : ''} | {this.props.MovieDetails.original_language ? this.props.MovieDetails.original_language.toUpperCase(): ''}</p>
                            <p className="content-genre">genre</p>
                            </div>
                            
                    </div>

                </div>
            );
        } else if(type === 'tv') {
            return (
                <div className="item-details-info-container">
                    <img className="item-details-info-img" src={this.props.config.images && this.props.TVDetails.poster_path ? this.props.config.images.secure_base_url + this.props.config.images.backdrop_sizes[2] + this.props.TVDetails.backdrop_path : ''} alt={this.props.TVDetails.name} />
                        
                    <div className="item-details-info-content">
        
                            <img className="content-img" src={this.props.config.images && this.props.TVDetails.poster_path ? this.props.config.images.secure_base_url + this.props.config.images.poster_sizes[0] + this.props.TVDetails.poster_path : ''} alt="" />
                            
                            <div className="content-info">
                            <h1>{this.props.TVDetails ? this.props.TVDetails.name : ''}</h1>
                            <div className="content-rating">
                                <p className="content-rating-digit">{this.props.TVDetails ? this.props.TVDetails.vote_average : ''}</p>
                                <div className="content-rating-star">+ - + -</div>
                            </div>
                            <p className="content-detail">{this.props.TVDetails ? this.props.TVDetails.status : ''} {this.props.TVDetails.first_air_date ? this.formatYear(this.props.TVDetails.first_air_date) : ''} | {this.props.TVDetails.original_language ? this.props.TVDetails.original_language.toUpperCase(): ''}</p>
                            <p className="content-genre">genre</p>
                            </div>
                            
                    </div>

                </div>
            );
        }
    };

    itemDetailsSum = (type) => {
        switch(type){
            case 'movie':
                return(
                    <div className="item-details-main-summary">
                        <h2 className="summary">Summary</h2>
                        <p>{this.props.MovieDetails.overview}</p>
                    </div>
                );
            case 'tv':
                return(
                    <div className="item-details-main-summary">
                        <h2 className="summary">Summary</h2>
                        <p>{this.props.TVDetails.overview}</p>
                    </div>
                );
            default:
                return null; 
        }
    };

    itemDetailsCast = type => {
        switch(type){
            case 'movie':
                return(
                    <div className="item-details-main-cast">
                        <h2 className="cast">Cast</h2>
                        <Cast config={this.props.config} people={this.props.MovieCredits.cast ? this.props.MovieCredits.cast : ''} />
                    </div>
                );
            case 'tv':
                return(
                    <div className="item-details-main-cast">
                        <h2 className="cast">Cast</h2>
                        <Cast config={this.props.config} people={this.props.TVCredits.cast ? this.props.TVCredits.cast : ''} />
                    </div>
                );
            default:
                return null;
        }
    };

    formatYear = date => date.split('-')[0];

    render(){
        return (
            <div className="item-details">
                <header className="item-details-header">
                    <div className="item-details-info-nav">
                    <span><FontAwesomeIcon icon={faCaretLeft} onClick={() => this.props.history.goBack()}/></span>
                    </div>
                    {this.itemDetailsHeader(this.props.match.params.type)}
                    
                </header>

                <main className="item-details-main" >
                        {this.itemDetailsSum(this.props.match.params.type)}

                        {this.itemDetailsCast(this.props.match.params.type)}

                        <div className="item-details-main-trailers">
                            <h2 className="trailers">Trailers</h2>

                        </div>

                        <div className="item-details-main-reviews">
                            <h2 className="reviews">Reviews</h2>

                        </div>
                </main>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,

    itemType: state.setMediaType.itemType,

    MovieDetails: state.movieDetails,
    MovieCredits: state.movieCredits,
    MovieTrailers: state.movieTrailers,
    MovieReviews: state.movieReviews,

    TVDetails: state.TVDetails,
    TVCredits: state.TVCredits,
    TVTrailers: state.TVTrailers,
    TVReviews: state.TVReviews,

});

const mapDispatchToProps = dispatch => ({
    movieDetails: url => dispatch(movieDetails(url)),
    movieCredits: url => dispatch(movieCredits(url)),
    movieReviews: url => dispatch(movieReviews(url)),
    movieTrailers: url => dispatch(movieTrailers(url)),

    tvDetails: url => dispatch(tvDetails(url)),
    tvCredits: url => dispatch(tvCredits(url)),
    tvTrailers: url => dispatch(tvTrailers(url)),
    tvReviews: url => dispatch(tvReviews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(itemDetails);