import React, { Component } from 'react'

import './mainSlider.css';

export default class MainSlider extends Component {
    render() {
        return (
            <div className="slider_container">
                <div className="slide_wrapper">
                <a href="/">
                    <img src="https://cdn.onebauer.media/one/empire-tmdb/films/99861/images/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" alt="" />
                    <div>
                        <p>Latest</p>
                        <h2>Title here</h2>
                        <p>Genre | 9.9 Rating</p>
                    </div>
                </a>
                </div>
            </div>
        )
    }
}