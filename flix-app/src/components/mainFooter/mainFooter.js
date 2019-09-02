import React, { Component } from 'react'

import './footerStyle.css';
import TMDBLOGO from './img/logo.svg';

class mainFooter extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="main-footer-info">
                        <h1>Flix</h1>
                        <p>&copy; Erik Gardea</p>
                        <a href="https://pedantic-mahavira-54cae4.netlify.com" target="_blank">Erik Gardea Portfolio</a>
                    </div>
                    <div className="main-footer-logo">
                        <img src={TMDBLOGO} alt="The Movie Data Base Logo" />
                    </div>
                    <ul className="main-footer-contact">
                        <li><a href="https://www.themoviedb.org/documentation/api" target="_blank" >API Docs</a></li>
                        <li><a href="https://www.facebook.com/themoviedb" target="_blank" >Follow TMDB on Facebook</a></li>
                        <li><a href="https://twitter.com/themoviedb" target="_blank" >Tweet TMDB</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default mainFooter;