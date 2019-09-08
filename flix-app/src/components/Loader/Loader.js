import React, { Component } from 'react'
import './loaderStyle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-container">
                <FontAwesomeIcon icon={faSpinner} className="loader" />
            </div>
        )
    }
}
