import {POPULAR_MOVIES} from '../types';
import Axios from 'axios';

const saveData = payload  => ({
    type: POPULAR_MOVIES,
    payload
});

const popularMovies = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default popularMovies;