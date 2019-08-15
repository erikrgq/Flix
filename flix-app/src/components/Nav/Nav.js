import React, { Component } from 'react';

import './navStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
    render() {
        return (
            <nav>
                <span><FontAwesomeIcon icon={faFilm} className="nav_icon" /></span>
                <form className="nav_top" onSubmit={this.onSubmit}>
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

export default Nav;