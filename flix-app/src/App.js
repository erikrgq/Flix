import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import searchResult from './components/searchResult/SearchResult';
import Home from './components/home/Home';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
        <Route exact path="/search-result" component={searchResult} />
        <main className="main_home">
        <Route exact path="/home" component={Home} />
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
