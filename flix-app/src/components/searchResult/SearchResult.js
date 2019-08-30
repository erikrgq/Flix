import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import './searchStyle.css';

import searchResult from '../../actions/SearchResultAction';
import postSearchResult from '../../actions/PostSearchResultAction';

class SearchResult extends Component {

    state = {
        searchResult: null,
        page: 1
    }

    //initial data fetching
    componentDidMount(){
        this.props.searchResult(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.searchInput}&page=${this.state.page}&include_adult=false&region=US`)
    }

    //will fetch new data
    componentDidUpdate(nextProps) {
        if(this.props.searchInput !== nextProps.searchInput){
            this.props.searchResult(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.searchInput}&page=${this.state.page}&include_adult=false&region=US`);
        }
    }

    //renders pagination according to the state fo the component
    handlePagination = pageTransition => {
        if (this.state.page === 1 && pageTransition === '-') {
          this.setState({ page: 1 });
        } else if (pageTransition === '+') {
          this.setState({ page: this.state.page + 1 })
        } else if (pageTransition === '+') {
          this.setState({ page: this.state.page - 1 })
        }
        this.props.searchData(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.searchInput}&page=${this.state.page}&include_adult=false&region=US`);
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
        switch(this.props.searchInput) {

            case 'top-rated-movies':
              return(
                <div className="search-results-main-body">
                  {this.props.moviesTopRated.results.length > 0 ? this.props.moviesTopRated.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/movie/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'upcoming-movies':
              return(
                <div className="search-results-main-body">
                  {this.props.moviesUpcoming.results.length > 0 ? this.props.moviesUpcoming.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/movie/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'now-playing-movies':
              return(
                <div className="search-results-main-body">
                  {this.props.moviesNowPlaying.results.length > 0 ? this.props.moviesNowPlaying.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/movie/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'popular-movies':
              return(
                <div className="search-results-main-body">
                  {this.props.moviesPopular.results.length > 0 ? this.props.moviesPopular.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/movie/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'popular-tv-shows':
              return(
                <div className="search-results-main-body">
                  {this.props.TVPopular.results.length > 0 ? this.props.TVPopular.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/tv/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'top-rated-tv-shows':
              return(
                <div className="search-results-main-body">
                  {this.props.TVTopRated.results.length > 0 ? this.props.TVTopRated.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/tv/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'on-the-air-tv-shows':
              return(
                <div className="search-results-main-body">
                  {this.props.TVOnTheAir.results.length > 0 ? this.props.TVOnTheAir.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/tv/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'airing-today-tv-shows':
              return(
                <div className="search-results-main-body">
                  {this.props.TVAiringToday.results.length > 0 ? this.props.TVAiringToday.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/tv/${item.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + item.poster_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{item.title}</h3>
                          {this.handleGenres(item.media_type, item.genre_ids)}
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            case 'popular-people':
              return(
                <div className="search-results-main-body">
                  {this.props.peoplePopular.results.length > 0 ? this.props.peoplePopular.results.map(person =>
                    (
                      <Link key={person.id} to={`/details/people/${person.id}`}>
                        <div className="search-results-main-body-item">
                          <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + person.profile_path : ''} alt="" />
                          <h3 className="search-results-main-body-item__title">{person.name}</h3>
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
      
            default:
              return(
                <div className="search_result_body">
                  {this.props.searchResultData.results.length > 0 ? this.props.searchResultData.results.map(item =>
                    (
                      <Link key={item.id} to={`/details/${this.props.itemType.toLowerCase()}/${item.id}`} className="search_link">
                        <div className="search_result">
                          <img className="search_result_img" src={this.props.config.images ? this.props.config.images.secure_base_url + this.props.config.images.poster_sizes[6] + item.poster_path : '' } alt={item.title} />
                          <h3 className="search_result_title">{item.media_type === 'tv' ? item.name : item.title}</h3>
                        </div>
                      </Link>
                    )
                  ) :
                  (
                    null
                  )}
      
                </div>
              );
          }
        }      

    render() {
        return (
            <div className="search">

                <Nav />
                <main className="search_results_main">

                    <header>
                        <h1>Search results for {this.parseSearchStr(this.props.searchInput)}</h1>
                        <hr/>
                    </header>
                    {this.renderResults()}
                </main>

                <footer className="search_results_footer">

                </footer>
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
