import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper';

import setMediaType from '../../actions/SetMediaType';

import Nav from '../Nav/Nav';
import MainSlider from '../mainSlider/MainSlider';
import MediaButtons from '../mediaButtons/MediaButton';
import MediaCarousel from '../mediaCarousel/mediaCarousel';

import nowPlayingMovies from '../../actions/movieActions/nowPlayingMovies';
import popularMovies from '../../actions/movieActions/popularMovies';
import topRatedMovies from '../../actions/movieActions/topRatedMovies';
import upcomingMovies from '../../actions/movieActions/upcomingMovies';

import topRated from '../../actions/TVActions/TopRated';
import tvAiringToday from '../../actions/TVActions/TVAiringToday';
import tvOnAir from '../../actions/TVActions/TVOnAir';
import popularTv from '../../actions/TVActions/TVPopular';

class Home extends Component {

    componentDidMount() {
        if(this.props.itemType === 'MOVIE') {
            this.handleMovieFetch();
        } else if(this.props.itemType === 'TV') {
            this.handleTVFetch();
        }
    }

    handleMovieFetch = () => {
        this.props.nowPlayingMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.popularMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.topRatedMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.upcomingMovies(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
    }

    handleTVFetch = () => {
        this.props.topRated(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.tvAiringToday(`https://api.themoviedb.org/3/tv/airing_today?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.tvOnAir(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.popularTv(`https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
    }

    render() {
        (() => {
            const sliderElement = document.querySelectorAll('.swiper-containers');
             if(!sliderElement){
               return;
             }
             const slider = new Swiper(sliderElement, {
               init: true,
               slidesPerView: 7,
               loop: true,
               spaceBetween: 14,
               observer: true,
      
               breakpoints: {
                 1145: {
                   slidesPerView: 5
                 },
                 699: {
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

          let movie;
          if(this.props.itemType === 'MOVIE' && this.handleMovieFetch()){
              movie = 
              <div>
                  <MediaCarousel title="Now Playing" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.nowPlayingMovies.results} type={this.props.itemType} />
                  <MediaCarousel title="Upcoming" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.upcomingMovies.results} type={this.props.itemType} />
                  <MediaCarousel title="Popular" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.popularMovies.results} type={this.props.itemType} />
                  <MediaCarousel title="Top Rated" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.topRatedMovies.results} type={this.props.itemType} />
              </div>;
          } else if(this.props.itemType === 'TV' && this.handleTVFetch) {
              movie = 
              <div>
                  <MediaCarousel title="TV On Air" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.tvOnAir.results} type={this.props.itemType} />
                  <MediaCarousel title="TV Airing Today" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.tvAiring.results} type={this.props.itemType} />
                  <MediaCarousel title="Popular TV" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.popularTv.results} type={this.props.itemType} />
                  <MediaCarousel title="Top Rated TV" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.topRated.results} type={this.props.itemType} />
              </div>;
          }

        return (
            <div>
                <Nav />
                
                <MediaButtons />
                <div>
                    {movie}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,

    movieGenre: state.movieGenre,
    tvGenre: state.tvGenre,
    trendingMovie: state.trendingMovie,

    itemType: state.setMediaType.itemType,

    upcomingMovies: state.upcomingMovies,
    popularMovies: state.popularMovies,
    topRatedMovies: state.topRatedMovies,
    nowPlayingMovies: state.nowPlayingMovies,

    topRated: state.topRated,
    popularTv: state.TVPopular,
    tvOnAir: state.TVOnAir,
    tvAiring: state.TVAiringToday,
});

const mapDispatchToProps = dispatch => ({
    setMediaType: type => dispatch(setMediaType(type)),

    nowPlayingMovies: url => dispatch(nowPlayingMovies(url)),
    popularMovies: url => dispatch(popularMovies(url)),
    topRatedMovies: url => dispatch(topRatedMovies(url)),
    upcomingMovies: url => dispatch(upcomingMovies(url)),

    topRated: url => dispatch(topRated(url)),
    tvAiringToday: url => dispatch(tvAiringToday(url)),
    tvOnAir: url => dispatch(tvOnAir(url)),
    popularTv: url => dispatch(popularTv(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);