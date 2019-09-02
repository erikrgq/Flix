import React, { Component } from 'react'
import { connect } from 'react-redux'

import setMediaType from '../../actions/SetMediaType';

import Nav from '../Nav/Nav';
import MainSlider from '../mainSlider/MainSlider';
import MediaButtons from '../mediaButtons/MediaButton';
import MediaCarousel from '../mediaCarousel/mediaCarousel';

import Loader from '../Loader/Loader';
import MainFooter from '../mainFooter/mainFooter';

import nowPlayingMovies from '../../actions/movieActions/nowPlayingMovies';
import popularMovies from '../../actions/movieActions/popularMovies';
import topRatedMovies from '../../actions/movieActions/topRatedMovies';
import upcomingMovies from '../../actions/movieActions/upcomingMovies';

import topRated from '../../actions/TVActions/TopRated';
import tvAiringToday from '../../actions/TVActions/TVAiringToday';
import tvOnAir from '../../actions/TVActions/TVOnAir';
import popularTv from '../../actions/TVActions/TVPopular';

import './homeStyle.css';

class Home extends Component {
    //checks for media type
    componentDidMount() {
        if(this.props.itemType === 'MOVIE') {
            this.handleMovieFetch();
        }
    }
    componentDidUpdate() {
        if(this.props.itemType === 'TV') {
            this.handleTVFetch();
        }
    }

    //fetches data
    handleMovieFetch = () => {
        this.props.nowPlayingMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.popularMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.topRatedMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.upcomingMovies(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.props.apiKey}&language=en-US&page=1`);
    }

    handleTVFetch = () => {
        this.props.topRated(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.popularTv(`https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.tvOnAir(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.tvAiringToday(`https://api.themoviedb.org/3/tv/airing_today?api_key=${this.props.apiKey}&language=en-US&page=1`);
    }

    render() {
        //displays movie or tv media carousel
        let movie;
        if(this.props.itemType === 'MOVIE'){
            movie = 
            <div>
                <MediaCarousel title="Now Playing" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.NowPlayingMovies.results} type={this.props.itemType} />
                <MediaCarousel title="Upcoming" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.UpcomingMovies.results} type={this.props.itemType} />
                <MediaCarousel title="Popular" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.PopularMovies.results} type={this.props.itemType} />
                <MediaCarousel title="Top Rated" genres={this.props.movieGenre.genres} config={this.props.config} items={this.props.TopRatedMovies.results} type={this.props.itemType} />
            </div>
        } else if(this.props.itemType === 'TV') {
            movie = 
            <div>
                <MediaCarousel title="TV On Air" genres={this.props.tvGenre.genres} config={this.props.config} items={this.props.TvOnAir.results} type={this.props.itemType} />
                <MediaCarousel title="TV Airing" genres={this.props.tvGenre.genres} config={this.props.config} items={this.props.TvAiring.results} type={this.props.itemType} />
                <MediaCarousel title="Popular TV" genres={this.props.tvGenre.genres} config={this.props.config} items={this.props.PopularTv.results} type={this.props.itemType} />
                <MediaCarousel title="Top Rated TV" genres={this.props.tvGenre.genres} config={this.props.config} items={this.props.TopRatedTv.results} type={this.props.itemType} />
            </div>
        }

        return (
            <div>
                <Nav />
                <MainSlider items={this.props.itemType === 'TV' ? this.props.trendingTV.results : this.props.trendingMovie.results} />
                <MediaButtons />
                <div id="media_swiper_result">
                    {movie}
                </div>
                <MainFooter />
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
    trendingTV: state.trendingTV,

    itemType: state.setMediaType.itemType,

    UpcomingMovies: state.upcomingMovies,
    PopularMovies: state.popularMovies,
    TopRatedMovies: state.topRatedMovies,
    NowPlayingMovies: state.nowPlayingMovies,

    TopRatedTv: state.topRated,
    PopularTv: state.TVPopular,
    TvOnAir: state.TVOnAir,
    TvAiring: state.TVAiringToday,
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