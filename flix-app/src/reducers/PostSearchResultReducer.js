import { POST_SEARCH_RESULT } from '../actions/types';

const initialState = {
    results: []
};

const postSearchResult = (state = initialState, action) => {
    switch(action.type) {
        case POST_SEARCH_RESULT:
            return{
                ...action.payload
            }
        default:
            return state;
    }
};

export default postSearchResult;