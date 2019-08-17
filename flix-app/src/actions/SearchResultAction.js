import { SEARCH_RESULT } from './types';

const saveResult = payload => ({
    type: SEARCH_RESULT,
    payload
});

const searchResult = url => {
    return dispatch => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatch(saveResult(data)))
        .catch(error => console.log(error));
    }
};

export default searchResult;