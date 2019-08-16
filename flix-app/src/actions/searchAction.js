import {SEARCH_RESULT, FETCH_RESULT} from './types';
import axios from 'axios';
import {APIKey} from '../APIKey';

export const searchResult = (text) =>  dispatch => {
    dispatch({
        type: SEARCH_RESULT,
        payload: text
    });
};

export const fetchResults = text => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${APIKey}&language=en-US&query=${text}&include_adult=false&region=US`)
    .then(response => dispatch({
        type: FETCH_RESULT,
        payload: response.data
    }))
    .catch(err => alert('error fetching'));
};
