import React, { Component } from 'react'

import Nav from '../Nav/Nav';
import MainSlider from '../mainSlider/MainSlider';
import MediaButtons from '../mediaButtons/MediaButton';
import DiscoverMovies from '../discoverMovies/DiscoverMovies';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <MainSlider />
                <MediaButtons />
                <DiscoverMovies />
            </div>
        )
    }
}
