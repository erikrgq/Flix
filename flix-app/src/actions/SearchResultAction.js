import { SEARCH_RESULT } from './types';
import Axios from 'axios';

const saveData = payload  => ({
    type: SEARCH_RESULT,
    payload
});

const searchResult = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default searchResult;