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
        this.props.searchResult(`https://api.themoviedb.org/3/search/movie?api_key=${this.props.apiKey}&language=en-US&query=${this.props.searchInput}&page=${this.state.page}&include_adult=false`);
    }

    //will fetch new data
    /*componentDidUpdate(prevProps) {
        if(this.props.result !== prevProps.result){
            this.props.searchResult(`https://api.themoviedb.org/3/search/movie?api_key=${this.props.apiKey}&language=en-US&query=${this.props.searchInput}&page=${this.state.page}&include_adult=false`);
        }
    }*/

    //renders pagination according to the state fo the component
    handlePagination = pageTransition => {
        if (this.state.page === 1 && pageTransition === '-') {
          this.setState({ page: 1 });
        } else if (pageTransition === '+') {
          this.setState({ page: this.state.page + 1 })
        } else if (pageTransition === '+') {
          this.setState({ page: this.state.page - 1 })
        }
        this.props.searchData(`https://api.themoviedb.org/3/search/multi?api_key=${this.props.apiKey}&language=en-US&query=${this.props.searchInput}&page=${this.state.page}&include_adult=false`);
    }

    render() {
        return (
            <div className="search">

                <Nav />
                <main className="search_results_main">

                    <header>
                        <h1>search results for this</h1>
                        <hr/>
                    </header>

                    <div className="search_result_body">
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                                <p>Action/Comedy</p>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a>
                        <a href="/">
                            <div className="search_result">
                                <img className="search_result_img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                                <h3 className="search_result_title">title her it is</h3>
                            </div>
                        </a> 
                    </div>

                    <div>
                        <button>-</button>
                        <button>+</button>
                    </div>

                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    config: state.ApiKeyConfig,
    result: state.searchResult.results.result,
    searchInput: state.searchText.searchInput
});

const mapDispatchToProps = dispatch => ({
    searchResult: url => dispatch(searchResult(url)),
    postSearchResult: url => dispatch(postSearchResult(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
