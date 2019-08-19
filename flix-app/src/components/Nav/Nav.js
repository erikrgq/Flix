import React, { Component } from 'react';
import {connect} from 'react-redux';

import './navStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

import saveText from '../../actions/SearchTextAction';
import searchResult from '../../actions/SearchResultAction';

class Nav extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            text: 'avengers'
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }*/

    onChange = e => {
        const text = e.target.value;
        this.props.saveText(text);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchResult(this.props.text);
    }

    render() {
        return (
            <nav>
                <span><FontAwesomeIcon icon={faFilm} className="nav_icon" /></span>
                <form className="nav_top" onSubmit={this.onSubmit}>
                    <input type="text" name="search" placeholder="Search Flix..." onChange={this.onChange} />
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

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    text: state.searchText.text
});

const mapDispatchToProps = dispach => ({
    saveText: () => dispach(saveText()),
    searchResult: () => dispach(searchResult())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);