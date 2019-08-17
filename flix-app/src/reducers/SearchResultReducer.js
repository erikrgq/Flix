import { SEARCH_RESULT} from '../actions/types';

const initialState = {
    results: []
}

const searchResult = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_RESULT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default searchResult;