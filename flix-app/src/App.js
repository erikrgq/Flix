import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

import searchResult from './components/searchResult/SearchResult';
import Home from './components/home/Home';
import apiKeyAndConfig  from './actions/ApiKeyConfigAction';

class App extends Component{
  componentDidMount(){
    this.props.apiKeyAndConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
  }

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

const mapStateToProps = state => ({
  apiKey: state.ApiKeyConfig.apiKey
});

const mapDispatchToProps = dispatch => ({
  apiKeyAndConfig: url => dispatch(apiKeyAndConfig(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
