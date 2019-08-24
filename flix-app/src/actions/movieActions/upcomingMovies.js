import {UPCOMING_MOVIES} from '../types';
import Axios from 'axios';

const saveData = payload  => ({
    type: UPCOMING_MOVIES,
    payload
});

const upcomingMovies = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default upcomingMovies;