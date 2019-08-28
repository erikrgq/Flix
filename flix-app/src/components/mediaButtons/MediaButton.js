import React, { Component } from 'react'
import { connect } from 'react-redux';

import setMediaType from '../../actions/SetMediaType';

import './mediaButton.css';

class MediaButton extends Component {
    render() {
        return (
            <div className="btn_container">
                <button onClick={() => {this.props.setMediaType('MOVIES')}}>Movies</button>
                <button onClick={() => { this.props.setMediaType('TV')}}>TV Shows</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itemType: state.setMediaType.itemType,
});

const mapDispatchToProps = dispatch => ({
    setMediaType: type => dispatch(setMediaType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaButton);
