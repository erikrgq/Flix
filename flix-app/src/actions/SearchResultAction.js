import { SEARCH_RESULT } from './types';
import Axios from 'axios';

const searchResult = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch({
        type: SEARCH_RESULT,
        payload: response.data
    }))
    .catch(error => console.log(error));
};

export default searchResult;