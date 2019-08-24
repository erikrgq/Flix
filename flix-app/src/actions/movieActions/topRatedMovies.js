import {TOP_RATED_MOVIES} from '../types';
import Axios from 'axios';

const saveData = payload  => ({
    type: TOP_RATED_MOVIES,
    payload
});

const topRatedMovies = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default topRatedMovies;