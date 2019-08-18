import { SEARCH_RESULT } from './types';
import Axios from 'axios';


const saveResult = payload => ({
    type: SEARCH_RESULT,
    payload
});

const searchResult = url => {
    return dispatch => {
        Axios.get(url)
        .then(res => res.data)
        .then(data => dispatch(saveResult(data)))
        .catch(error => console.log(error));
    }
};

export default searchResult;