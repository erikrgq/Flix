import React, { Component } from 'react'

import './mainSlider.css';

export default class MainSlider extends Component {
    render() {
        return (
            <div className="slider_container">
                <a href="">
                    <img src="https://cdn.mos.cms.futurecdn.net/PBpaPfht3TSS2rSg5ezHE-970-80.jpg" />
                    <div>
                        <p>Latest</p>
                        <h2>Title here</h2>
                        <p>Genre | 9.9 Rating</p>
                    </div>
                </a>
            </div>
        )
    }
}