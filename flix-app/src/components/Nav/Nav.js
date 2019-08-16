import React, { Component } from 'react';
import {searchResult, fetchResults} from '../../actions/searchAction';
import {connect} from 'react-redux';

import './navStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {

    handleSearchQuery = (e) => {
        this.props.searchResult(e.target.value);
    }
    submitSearch = (e) => {
        e.preventDefault();
        this.props.fetchResults(this.props.text);
    }

    render() {
        return (
            <nav>
                <span><FontAwesomeIcon icon={faFilm} className="nav_icon" /></span>
                <form className="nav_top" onSubmit={this.submitSearch}>
                    <input type="text" name="search" placeholder="Search Flix..." onChange={this.handleSearchQuery} />
                    <button type="submit" value="submit" className="btn search_btn"><FontAwesomeIcon icon={faSearch} className="nav_icon" /></button>
                </form>
                <div className="nav_bottom">
                    <span><FontAwesomeIcon icon={faHome} className="nav_icon" /></span>
                    <span><FontAwesomeIcon icon={faUser} className="nav_icon" /></span>
                </div>
            </nav>
        );
    }
};

const mapStatesToProps = state => ({
    text: state.results
});

export default connect(mapStatesToProps, {searchResult, fetchResults})(Nav);