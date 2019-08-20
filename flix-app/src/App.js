import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Nav from './components/Nav/Nav';
import MainSlider from './components/mainSlider/MainSlider';
import MediaButtons from './components/mediaButtons/MediaButton';
import DiscoverMovies from './components/discoverMovies/DiscoverMovies';
import searchResult from './components/searchResult/SearchResult';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Route path="search-result" exact component={searchResult} />
          <Nav />
          <main className="main_home">
          <MainSlider />
          <MediaButtons />
          <DiscoverMovies />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
