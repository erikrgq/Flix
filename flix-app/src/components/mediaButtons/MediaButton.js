import React, { Component } from 'react'

import './mediaButton.css';

export default class MediaButton extends Component {
    render() {
        return (
            <div className="btn_container">
                <a href="/">
                <button>Movies</button>
                </a>
                <a href="/">
                <button>TV Shows</button>
                </a>
            </div>
        )
    }
}
