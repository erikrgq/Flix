import { SEARCH_RESULT } from './types';
import Axios from 'axios';

const saveResult = payload => ({
    type: SEARCH_RESULT,
    payload
});

const searchResult = text => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=204a23cc979d825bf52238aed9a22056&language=en-US&query=${text}&page=1&include_adult=false`)
    .then(response => dispatch(saveResult(response)))
    .catch(error => console.log(error));
};

export default searchResult;