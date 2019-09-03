import React, { Component } from 'react'

import './starStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class starRating extends Component {
    // Activates stars based on star rating
    setRating = rating => {

        rating = Math.round(rating / 2);

        document.querySelectorAll('.star-rating-container-item').forEach((node, i) => {
        if (i < rating) {
            node.classList.add("star-rating-container-item-active");
        }
        });
    };

    render() {
        this.setRating(this.props.rating)
        return (
            <div className="star-rating-container">
                <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
                <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
                <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
                <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
                <FontAwesomeIcon icon={faStar} className="star-rating-container-item" />
            </div>
        )
    }
}

export default starRating;
