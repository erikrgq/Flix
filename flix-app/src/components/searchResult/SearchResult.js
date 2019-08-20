import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

import searchResult from '../../actions/SearchResultAction';
import postSearchResult from '../../actions/PostSearchResultAction';

class SearchResult extends Component {

    state = {
        searchResult: null,
        page: 1
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,
    searchMDBResult: state.searchResult,
    searchedResult: state.postSearchResult
});

const mapDispatchToProps = dispatch => ({
    searchResult: url => dispatch(searchResult(url)),
    postSearchResult: url => dispatch(postSearchResult(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
