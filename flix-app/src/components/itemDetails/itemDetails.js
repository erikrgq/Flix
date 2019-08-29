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
        if (nextProps.match.params.id !== this.props.match.params.id) {
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
    }



    itemDetailsHeader = type =>{
        const config = this.props.config;

        switch(type) {
            case 'movie':
                return(
                    <div></div>
                );
            case 'tv':
                return(
                    <div className="item-details-info-container">
               

                    </div>
                );
            default:
                return null;
        }
    }

    formatYear = date => date.split('-')[0];
    

    render(){
        return (
            <div className="item-details">
                <header className="item-details-header">
                    <div className="item-details-info-nav">
                        <span><FontAwesomeIcon icon={faCaretLeft} onClick={() => this.props.history.goBack()}/></span>
                    </div>
                    
                    <div className="item-details-info-container">
                        <img className="item-details-info-img" src="https://i.redd.it/vv5d3lisi7m01.png" alt="" />
                        
                        <div className="item-details-info-content">
        
                            <img className="content-img" src="" alt="" />
                            
                            <div className="content-info">
                            <h1>{this.props.movieDetails.title}</h1>
                            <div className="content-rating">
                                <p className="content-rating-digit">{this.props.movieDetails ? this.props.movieDetails.vote_average : ''}</p>
                                <div className="content-rating-star">+ - + -</div>
                            </div>
                            <p className="content-detail">{this.props.movieDetails ? this.props.movieDetails.status : ''} 2019 | {this.props.movieDetails.original_language ? this.props.movieDetails.original_language.toUpperCase(): ''}</p>
                            <p className="content-genre">{this.props.movieDetails.genres ? `${this.props.movieDetails.genres[0] ? this.props.movieDetails.genres[0].name : ''}` `${this.props.movieDetails.genres[1] ? ' | ' + this.props.movieDetails.genres[1].name : ''}`: ''}</p>
                            </div>
                            
                        </div>

                    </div>
                </header>

                <main className="item-details-main" >
                        <div className="item-details-main-summary">
                            <h2 className="summary">Summary</h2>
                            <p>here is where the story overview goes</p>
                        </div>

                        <div className="item-details-main-cast">
                            <h2 className="cast">Cast</h2>
                            <Cast config={this.props.config} people={this.props.movieCredits.cast ? this.props.movieCredits.cast : ''} />
                        </div>
                </main>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,

    itemType: state.setMediaType.itemType,

    movieDetails: state.movieDetails,
    movieCredits: state.movieCredits,
    movieTrailers: state.movieTrailers,
    movieReviews: state.movieReviews,

    tvDetails: state.TVDetails,
    tvCredits: state.TVCredits,
    tvTrailers: state.TVTrailers,
    tvReviews: state.TVReviews,

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