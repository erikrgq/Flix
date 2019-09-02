import React, { Component } from 'react'
import './loaderStyle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default class Loader extends Component {
    componentDidMount() {
        setTimeout(() => {
    
          document.querySelector('.loader-container').style.transition = 'opacity 5s';
          document.querySelector('.loader-container').style.opacity = '0';
    
          setTimeout(() => {
            document.querySelector('.loader-container').remove();
          }, 500);

        }, 1000);
      }
    render() {
        return (
            <div className="loader-container">
                <FontAwesomeIcon icon={faPlay} className="loader" />
            </div>
        )
    }
}
