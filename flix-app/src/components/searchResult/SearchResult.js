import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import MainFooter from '../mainFooter/mainFooter';
import './searchStyle.css';
import Loader from '../Loader/Loader';

import searchResult from '../../actions/SearchResultAction';
import postSearchResult from '../../actions/PostSearchResultAction';

class SearchResult extends Component {

    state = {
        searchResult: null,
        page: 1
    }

    //initial data fetching
    componentDidMount(){
        this.props.searchResult(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.match.params.id}&page=1&include_adult=false&region=US`);
    }

    //will fetch new data
    componentDidUpdate(nextProps) {
        if(this.props.match.params !== nextProps.id){
            this.props.searchResult(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false&region=US`);
        }
    }

    parseSearchStr = str => str.split('-').map((item, index) => index === 0 ? item.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join('') : item).join(' ');

    // Checks item genre ids, compares them to genre list and returns genre names
    renderGenres = (mediaType, genres) => {
        const genresList = mediaType === 'tv' ? this.props.TVGenres.genres : this.props.movieGenres.genres;
        if (genresList && genres) {
        let genresArr = genresList.filter(genre => genre.id === genres[0] || genre.id === genres[1] ? genre.name : null);
        return <p className="search-results-main-body-item__genres">{genresArr[0] ? genresArr[0].name : ''}{genresArr[1] ? ` / ` + genresArr[1].name : ''}</p>
        }
    }

    renderResults = () => {
        return(
          <div className="search_result_body">

            {this.props.searchResultData.results.length > 0 ? this.props.searchResultData.results.map(item =>
              (
                <Link key={item.id} to={`/details/${item.media_type.toLowerCase()}/${item.id}`} className="search_link">
                  <div className="search_result">
                    <img className="search_result_img" src={this.props.config.images ? this.props.config.images.secure_base_url + this.props.config.images.poster_sizes[6] + item.poster_path : this.props.config.backupPoster } alt={item.title} />
                    <h3 className="search_result_title">{item.media_type === 'tv' ? item.name : item.title}</h3>
                  </div>
                </Link>
              )
              ) :
              (
                <p style={{textAlign: 'center', display: 'block'}}>Error Loading...</p>
              )}
      
          </div>
        );
    }   

    render() {
        return (
            <div className="search">

                <Nav />
                <main className="search_results_main">

                    <header>
                        <h1>Search results for {this.parseSearchStr(this.props.match.params.id)}</h1>
                        <hr/>
                    </header>
                    {this.renderResults()}

                </main>
                <Loader />
                <MainFooter />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,
    searchResultData: state.searchResult,
    searchInput: state.searchText.searchInput,

    itemType: state.setMediaType.itemType,
});

const mapDispatchToProps = dispatch => ({
    searchResult: url => dispatch(searchResult(url)),
    postSearchResult: url => dispatch(postSearchResult(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
