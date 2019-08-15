import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import MainSlider from './components/mainSlider/MainSlider';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav />
        <MainSlider />
      </div>
    );
  };
}

export default App;
