import {TRENDING_TV} from '../types';
import Axios from 'axios';

const saveData = payload  => ({
    type: TRENDING_TV,
    payload
});

const searchTrendingTV = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default searchTrendingTV;