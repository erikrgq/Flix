import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './navStyle.css';
import Flixlogo from './Flixlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

import saveText from '../../actions/SearchTextAction';
import searchResult from '../../actions/SearchResultAction';

class Nav extends Component {
    state = {
        text: '',
    }

    onChange = e => {
        this.setState({text: e.target.value});
        
        /*const searchInput = e.target.value;
        this.props.saveText(searchInput);*/
    }

    
    render() {
        return (
            <nav>
                
                <img src={Flixlogo} alt="Flix Logo" className="nav_home" />
                
                <form className="nav_search" >
                    <input 
                        className="search_left" 
                        type="text" 
                        name="search" 
                        placeholder="Search Flix..." 
                        onChange={this.onChange} />
                    <Link to={`/search-result/${this.state.text}`}>
                    <button
                        className="search_right" 
                        type="submit" 
                        value="submit"
                        >
                        <FontAwesomeIcon icon={faSearch} className="nav_icon" />
                    </button>
                    </Link>
                </form>
                <div className="nav_right">
                    <span>
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faHome} className="nav_right_icon" />
                        </Link>
                    </span>
                    {/*<span>
                        <Link to={"/profile"}>
                            <FontAwesomeIcon icon={faUser} className="nav_right_icon" />
                        </Link>
                    </span>*/}
                </div>
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    apiKey: state.ApiKeyConfig.apiKey,
    searchInput: state.searchText.searchInput
});

const mapDispatchToProps = dispatch => ({
    searchResult: url => dispatch(searchResult(url)),
    saveText: searchInput => dispatch(saveText(searchInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);