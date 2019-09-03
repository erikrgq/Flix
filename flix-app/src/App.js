import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

import apiKeyAndConfig  from './actions/ApiKeyConfigAction';
import searchTrending from './actions/movieActions/trendingMovie';
import searchTrendingTV from './actions/TVActions/trendingTV';
import movieGenre from './actions/movieActions/movieGenre';
import tvGenre from './actions/TVActions/tvGenre';

import searchResult from './components/searchResult/SearchResult';
import Home from './components/home/Home';
import Details from './components/itemDetails/itemDetails'

class App extends Component{
  componentDidMount(){
    this.props.apiKeyAndConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
    this.props.searchTrending(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.props.apiKey}`);
    this.props.searchTrendingTV(`https://api.themoviedb.org/3/trending/tv/day?api_key=${this.props.apiKey}`);
    this.props.movieGenre(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.props.apiKey}&language=en-US`);
    this.props.tvGenre(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.props.apiKey}&language=en-US`);
  }

  render(){
    return (
      <Router>
        <div className="App">
        <Route path="/search-result" exact component={searchResult} />
        <Route path="/details/:type/:id" exact component={Details} />
        <main className="main_home">
        <Route path="/" exact component={Home} />
        </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  apiKey: state.ApiKeyConfig.apiKey
});

const mapDispatchToProps = dispatch => ({
  apiKeyAndConfig: url => dispatch(apiKeyAndConfig(url)),
  searchTrending: url => dispatch(searchTrending(url)),
  searchTrendingTV: url => dispatch(searchTrendingTV(url)),
  movieGenre: url => dispatch(movieGenre(url)),
  tvGenre: url => dispatch(tvGenre(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
