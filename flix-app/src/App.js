import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';

import Nav from './components/Nav/Nav';
import MainSlider from './components/mainSlider/MainSlider';
import MediaButtons from './components/mediaButtons/MediaButton';
import DiscoverMovies from './components/discoverMovies/DiscoverMovies';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Nav />
          <main className="main_home">
          <MainSlider />
          <MediaButtons />
          <DiscoverMovies />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
